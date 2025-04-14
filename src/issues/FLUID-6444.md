---json
{
  "title": "FLUID-6444",
  "summary": "Scope leakage issues with \"fast path\" cached scopes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-12-18T19:22:50.266-0500",
  "updated": "2021-06-21T12:37:13.954-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
A peculiar test failure was found in GPII univeral's tests that was annoyingly dependent on the order of execution of tests. It turns out a number of errors contributed to the problem.

Firstly, there is a component in the metrics tests named a "metricsWrapper" which is in fact an entire lifecycleManager:

```java
fluid.defaults("gpii.tests.metricsWrapper", {
    gradeNames: ["fluid.component", "gpii.metrics", "gpii.eventLog", "gpii.lifecycleManager"],
```

A free component of this type is constructed by the tests which they never bother to clean up. This component was not visible by our old "slow path" scope resolution rules which manually skipped the root via the ancestral fluid.getThatStack:

```java
// Note - the returned stack is assumed writeable and does not include the root
        that.getThatStack = function (component) {
```

However, in implementing the fast scope chain via "ownScope" and "childrenScope" in shadow records we neglected to mirror these rules, resulting in **bug 1: Free components are visible in the global scope via fast path resolution**. Typically they are visible so weakly that this leakage did not so far cause a problem except in combination with the next problem.

 

In order that frequently referenced components in gpii-universal test cases, such as the lifecycleManager, can be easily referred to, we operated a "hoisting trick" in order to make them directly visible on the TestCaseHolder object via definitions like so:

```java
fluid.defaults("gpii.test.common.untrusted.lifecycleManagerReceiver", {
    distributeOptions: {
        record: {
            funcName: "gpii.test.common.receiveComponent",
            args: ["{testCaseHolder}", "{arguments}.0", "lifecycleManager"]
        },
        target: "{that localConfig lifecycleManager}.options.listeners.onCreate"
    }
});
```

which executes the definition

```java
gpii.test.common.receiveComponent = function (testCaseHolder, component, name) {
    if (!testCaseHolder[name]) {
        fluid.globalInstantiator.recordKnownComponent(testCaseHolder, component, name, false);
    }
};
```

This is an annoyance awaiting a satisfactory resolution of <https://issues.fluidproject.org/browse/FLUID-5556> on which there is a lot of interesting commentary.\
Unfortunately this punches through into a very long latent bug with respect to our implementation of fast scoping for injected component references. The implementation in recordComponent is

```java
function recordComponent(parent, component, path, name, created) {
            if (created) {
....
            } else {
....
                fluid.each(keys, function (context) {
                    if (!parentShadow.childrenScope[context]) { // BUG HERE
                        parentShadow.childrenScope[context] = component;
                    }
                });
            }
```

The bug on the marked line is annoying and subtle. Rather than making an "own property check" to see if the context appears directly on the scope object itself, it makes a standard check for membership which evaluates the full scope chain - therefore it skips adding the property if it is in scope ANYWHERE. This means that injected component references don't take their proper place in the scope chain - rather than appearing at their own level, they are instead weaker than references appearing at any scope. This means that in combination with bug 1, the {lifecycleManager} hoisting ended up being a no-op and leaving the space junk free component as the only referent in scope. **Bug 2: Injected component references resolved via the fast scope chain are weaker than any other scope.**

        