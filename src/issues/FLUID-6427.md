---json
{
  "title": "FLUID-6427",
  "summary": "References cyclic through model and non-model state yield corrupted evaluation marker rather than failure",
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
  "date": "2019-11-16T18:47:40.396-0500",
  "updated": "2024-07-19T07:51:49.136-0400",
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
      "date": "2019-11-16T19:15:47.101-0500",
      "body": "At the point of the original cycle we have:\n\n```java\nfluid.defaults(\"gpii.app.dialog\", {\r\n    gradeNames: [\"gpii.app.localisedMessagesReceiver\", \"gpii.app.resizable\"],\r\n    model: {\r\n        width:       \"{that}.options.config.attrs.width\", // the actual width of the content\n```\n\nwhich is a base class for&#x20;\n\n```java\nfluid.defaults(\"gpii.app.qssInWrapper\", {\r\n    gradeNames: \"gpii.app.qss\",\r\n    config: {\r\n        params: {\r\n            settings: \"{qssWrapper}.model.settings\"\r\n        }\r\n    },\n```\n\nwhich itself derives from\n\n```java\n*/\r\nfluid.defaults(\"gpii.app.qss\", {\r\n    gradeNames: [\"gpii.app.dialog\", \"gpii.app.dialog.offScreenHidable\", \"gpii.app.blurrable\"],\n```\n"
    }
  ]
}
---
Yet another issue only observed in the FLUID-6148 in-progress branch. An options reference which, probably faultily, depends on model material, but which gets evaluated because it is needed in order to resolve some relay material during model initialisation, ends up resolving a corrupt "inEvaluation" marker in the model rather than causing a failure with a diagnostic.&#x20;

Another issue found during cleaning up <https://issues.gpii.net/browse/GPII-4147>

        