---json
{
  "title": "FLUID-6603",
  "summary": "Define the relay direction between the parent component and a conditional component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2021-03-15T13:44:38.527-0400",
  "updated": "2024-07-22T10:35:08.027-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2021-03-17T09:08:18.455-0400",
      "body": "As the pull request was written, the annotation was written in the wrong direction\n\n```java\nforward: {\r\n   excludeSource: \"init\"\r\n}\n```\n\nacts to prevent the source value flowing towards the target on initialisation (forward direction). However, the source value is the one on the subcomponent, and the target is on the parent. The rule should instead read\n\n```java\nbackward: {\r\n   excludeSource: \"init\"\r\n}\n```\n\nTherefore this feature is \"working as designed\" - however I have merged the test case in the pull request with the required fix since it supplies helpful extra coverage.\n"
    }
  ]
}
---
When a model relay is:

1\. Defined in a conditional sub-component that is constructed by a boolean model value in the parent component;\
2\. Define the initial model value in the sub-component;\
3\. Use "modelRelay" block to relay the model value between the parent component and the conditional sub-component.

Check model values after the construction, model values are all set to the initial value of the parent component rather than that of the sub-component. This seems making sense in some sort because the relay definition didn't tell which direction the relay should occur at the instantiation so the framework picks one which is from the parent to the sub.

[A pull request](https://github.com/amb26/infusion/pull/12) is issued against Antranig's FLUID-6580 branch to demonstrate this problem.

        