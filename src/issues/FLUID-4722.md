---json
{
  "title": "FLUID-4722",
  "summary": "Need some framework support for clearing listeners that belong to components that have shorter lifecycle than the event firer.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2012-06-14T14:50:43.037-0400",
  "updated": "2014-03-03T12:51:29.081-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Any\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4166/",
      "key": "FLUID-4166",
      "summary": "instantiator.clearComponent() will fail to clear components which appear at multiple paths"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4257/",
      "key": "FLUID-4257",
      "summary": "Add \"destruction\" lifecycle point and semantics into component system and IoC"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-16T02:27:21.598-0400",
      "body": "These events and also framework assistance for auto-removal of listeners added through boiling will be provided as part of the <https://fluidproject.atlassian.net/browse/FLUID-4257#icft=FLUID-4257> work\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2012-08-22T14:59:02.215-0400",
      "body": "Functionality delivered for <https://fluidproject.atlassian.net/browse/FLUID-4257#icft=FLUID-4257> now includes support for automatically deregistering listeners which were attached from components with shorter scopes. We probably need some more test cases to cover a few more special cases. The semantic implemented is that listeners that are registered **BY** any component - that is - which appear in its configuration - are cleared when the component is cleared - whether the listeners actually bind onto the cleared component or not.\n"
    }
  ]
}
---
There is a lingering issue where there might be some additional framework support necessary at the time when the component is being cleared away. In particular this issue is very evident when the component that is being cleared attached listener(s) to the event(s) that have longer lifecycle that the component itself. Even though the component will be cleared away, the listener that is nothing but a function object is still present and will be executed on event fire.

Proposed solution would require an addition of another lifecycle function that is only executed on the component clearance - a so called clearFunction. This function is the last point where there's a chance to remove such listeners. Also, we can impose an informal contract where the user would not need to declare such clear function if the listener(s) are specified declaratively and with a namespace. For that to work we would need to implement a "default" clearFunction for "fluid.eventedComponent" grade that will automatically clear all such listeners from the component.

Here's a pasted patch that I used in cspace's infusion :\
— a/src/main/webapp/defaults/lib/infusion/CSpaceInfusion.js\
+++ b/src/main/webapp/defaults/lib/infusion/CSpaceInfusion.js\
 -11157,7 +11157,8  var fluid = fluid || fluid\_1\_5;\
fluid.lifecycleFunctions = {\
preInitFunction: true,\
postInitFunction: true,

* &#x20;      finalInitFunction: true\
  \+        finalInitFunction: true,\
  \+        clearFunction: false\
  &#x20;    };

&#x20;    \
fluid.rootMergePolicy = fluid.transform(fluid.lifecycleFunctions, function () {\
 -11275,11 +11276,26  var fluid = fluid || fluid\_1\_5;\
options: 0\
}\
});\
+\
\+    fluid.clearEventedComponent = function (that) {\
\+        // Remove all declaratively attached event listeners that have a namespace.\
\+        fluid.each(that.options.listeners, function (listener, eventName) {\
\+            var namespace = listener.namespace;\
\+            if (!namespace) {\
\+                return;\
\+            }\
\+            that.events\[eventName].removeListener(namespace);\
\+        });\
\+    };

fluid.defaults("fluid.eventedComponent", {\
gradeNames: \["fluid.littleComponent"],\
mergePolicy: {\
listeners: fluid.mergeListenersPolicy\
\+        },\
\+        clearFunction: {\
\+            namespace: "clearEventedComponent",\
\+            listener: "fluid.clearEventedComponent"\
}\
});

 -11556,6 +11572,9  var fluid = fluid || fluid\_1\_5;

fluid.clearLifecycleFunctions = function (options) {\
fluid.each(fluid.lifecycleFunctions, function (value, key) {\
\+            if (!value) {\
\+                return;\
\+            }\
delete options\[key];\
});\
delete options.initFunction; \
 -14710,6 +14729,7  var fluid\_1\_5 = fluid\_1\_5 || {};\
that.clearComponent = function(component, name, child, options, noModTree) {\
options = options || {visited: {}, flat: true};\
child = child || component\[name];\
\+            fluid.fireEvent(child.options.clearFunction, child);\
fluid.visitComponentChildren(child, function(gchild, gchildname) {\
that.clearComponent(child, gchildname, null, options, noModTree);\
}, options);

        