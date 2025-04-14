---json
{
  "title": "FLUID-5592",
  "summary": "Error received using model relay to component which was destroyed by earlier listener to same transaction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-01-26T10:24:06.256-0500",
  "updated": "2020-10-25T19:27:20.529-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5552/",
      "key": "FLUID-5552"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5499/",
      "key": "FLUID-5499",
      "summary": "Think about scheduling of effects within the framework - especially the destruction of components"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5333/",
      "key": "FLUID-5333",
      "summary": "Create support for \"abortable events\" in the framework, to deal with cases where the holding component is destroyed"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-01-26T10:42:46.647-0500",
      "body": "Sent a pull request with a test case even though this test case didn't manage to expose the issue: <https://github.com/fluid-project/infusion/pull/580>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-01-26T20:59:50.912-0500",
      "body": "We can now characterise this issue properly. Given modelListeners are notified synchronously throughout the model skeleton when a transaction commits, we can bypass the framework's deregistration code if we happen to register a modelListener which destroys a component which is due to be notified by a later listener in the queue. This is one of the problematic \"costs of doing business\" with a synchronous event notification system. We have already encountered this issue and noted our response on <https://fluidproject.atlassian.net/browse/FLUID-5499#icft=FLUID-5499> - \"in a glorious future\" we could schedule all effects in the framework asynchronously, but currently we are a very long way from having adequate platform or tooling support.\n\nIn the meantime, we must continue to operate our \"abortable events\" model and extend it consistently to the change notifications operated by ChangeAppliers. The cost of this approach is that we miss the opportunity to detect some coding errors - blatant and direct cases of attempting to notify to events held by destroyed components will simply pass as no-ops. However, the benefit is that we don't have to give obscure and unwieldy advice to implementors such as \"avoid destroying components in model listeners\" - which given a typical implementation scenario would be equivalent to \"avoid destroying components at all\". This is especially problematic with respect to our very old-fashioned renderer which expects to be able to clear away a tree of subcomponents and replace them all within the same stack frame.\n\nResolving this issue required patching 3 separate locations in the model notification pathway. Given the complexity of the implementation, even should we improve it with <https://fluidproject.atlassian.net/browse/FLUID-5373#icft=FLUID-5373> refactoring, this will likely remain messy.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-01-27T11:58:23.214-0500",
      "body": "Merged into the master branch @ 605b0bcfaedf6193c31456236d3aa4e42cf36a96\n"
    }
  ]
}
---
Work on <https://fluidproject.atlassian.net/browse/FLUID-5552#icft=FLUID-5552> ran into an error when relaying to a model housed in a component which had already been destroyed as a result of re-rendering. The diagnostic was

```java
ASSERTION FAILED: Cannot resolve reference {change}.value from component { typeName: "fluid.textfieldSlider.textfield" gradeNames: ["fluid.textfieldSlider.textfield","fluid.viewRelayComponent","fluid.commonViewComponent","fluid.standardRelayComponent","fluid.modelRelayComponent","fluid.commonModelComponent"] id: byh4wskj-1519} which has been destroyed
```

(see <https://fluidproject.atlassian.net/browse/FLUID-5552#icft=FLUID-5552>) for more details. A straightforward attempt to reproduce the issue with a test case didn't manage to expose it - investigation is continuing.

        