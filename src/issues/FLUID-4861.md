---json
{
  "title": "FLUID-4861",
  "summary": "Invokers are getting created even if they are not set in the component configuration",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Alexey Novak",
  "date": "2012-12-07T13:10:20.527-0500",
  "updated": "2022-07-15T06:14:26.416-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-12-11T23:32:27.877-0500",
      "body": "Thanks, Alexey - this is indeed a kind of bug in that the framework behaviour is not entirely helpful. However, this highlights the design issue that invokers are primarily designed to cover cases where there is definitely exactly one implementation intended to cover the operation. In the case where the multiplicity of implementations might vary (including varying to zero as you have in this report), it is more appropriate to use a Fluid event to define the operation rather than an invoker. We should definitely fix the issue you have reported, but I think it is of relatively low priority given that the use of an undefined invoker (null) represents a non-ideal use of the framework.\n\nUntil the issue is fixed properly, you can work around it by assigning the invoker to the \"do-nothing\" function fluid.identity rather than to null.\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-12-12T09:00:12.894-0500",
      "body": "Thanks for such a detailed reply Antranig. I will try to use fluid.identity in the meantime and maybe even rethink the structure of the component I have.\n"
    }
  ]
}
---
Invokers are get assigned to&#x20;

```java
function() {
            var args = fluid.makeArray(arguments);
            // FLUID-4712: properly contextualise invoker so that any new constructions are not corrupted
            return fluid.withInstantiator(that, function(instantiator) {
                var invokeSpec = fluid.embodyDemands(instantiator, that, demandspec, args, {passArgs: true});
                return fluid.invokeGlobalFunction(invokeSpec.funcName, invokeSpec.args, environment);
            }, ["    while invoking invoker with name " + functionName + " on component", that], userInstantiator);
        }
```

If they are assigned to null in the configuration of the component which can potentially cause a JavaScript error if developer will try to call them in the finalInit.

I created a branch which has the test for this issue: <https://github.com/anvk/infusion/tree/FLUID-4861>\
Test file to run is: infusion/src/webapp/tests/framework-tests/core/html/FluidIoC-test.html

        