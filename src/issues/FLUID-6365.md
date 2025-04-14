---json
{
  "title": "FLUID-6365",
  "summary": "Create new construct, codenamed \"gyres\", to unify and replace the use of invokers and events",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-01-24T06:29:30.014-0500",
  "updated": "2024-07-19T08:06:54.113-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2020-12-15T11:47:31.724-0500",
      "body": "Note: A further thing we have to achieve when we abolish listeners is to fully potentialise their registration - look at the following messy locution in the IoC testing framework to deal with the cases whether the listener target exists yet or not:&#x20;\n\n```java\nbind = function (wrapped) {\r\n                // Push the distribution whether the component exists or not - since a further one may be created at this\r\n                // path via a createOnEvent annotation\r\n                var options = {};\r\n                fluid.event.identifyListener(wrapped);\r\n                fluid.set(options, [\"listeners\"].concat(analysed.path), {\r\n                    listener: wrapped,\r\n                    // Don't supply \"args\" here because we decode them ourselves in decodeListener\r\n                    namespace: fixture.namespace,\r\n                    priority: fixture.priority\r\n                });\r\n                id = fluid.pushDistributions(analysed.head, analysed.selector, fixture.event,\r\n                    [{options: options, recordType: \"distribution\", priority: fluid.mergeRecordTypes.distribution}]\r\n                );\r\n                var existent = analysed.query();\r\n                if (existent.length === 1) {\r\n                    // In addition, directly register the listener on any currently existing component\r\n                    var event = fluid.getForComponent(existent[0], [\"events\"].concat(analysed.path));\r\n                    event.addListener(wrapped, fixture.namespace, priority);\r\n                } else if (existent.length > 1) {\r\n                    reject(\" matched more than one component during bind: \", existent);\r\n                } // Note we do not reject on 0 matches since it may match via the distribution after construction\r\n            };\n```\n"
    }
  ]
}
---
These old-fashioned constructs suffer from very poor method combination capabilities as well as making unnecessary complexities for those who need to traffic in asynchronous values. We need a new, unifying construct, which arguably takes the form of a "very lightweight component" since it forms a scoping unit in which names can be resolved.

The old definitions would be "compiled" into the new form, much in the way that C's "structs" were grandfathered into C++ syntax as resugared kinds of "classes".

We codename this facility as "gyres" since the construct forms a small "swirl" in which names and values may locally follow each other about, until it is destroyed. We face the usual odd issue about when indeed we deallocate this thing - in the case it "compiles" to the effect of an old-fashioned method or invoker, we would obviously not allocate anything at all. In the case of a longer-lived gyre, it would be deallocated at the point that the lightweight IoC-like environment had made its last reference into it as a result of its final sequence step.

This development has been discussed and motivated at <https://wiki.fluidproject.org/display/fluid/Plan+to+Abolish+Invokers+and+Events>

        