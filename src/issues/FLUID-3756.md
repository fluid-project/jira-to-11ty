---json
{
  "title": "FLUID-3756",
  "summary": "inlineEdit deadMansBlur: allows multiple instances of inlineEdit to be in isEditing() mode  ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Mike Lam",
  "date": "2010-09-24T16:02:56.335-0400",
  "updated": "2010-10-07T12:42:34.048-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-07T12:42:34.046-0400",
      "body": "We removed the explicit save button that had been added to inline edit. This issue no longer exists.\n"
    }
  ]
}
---
To replicate: &#x20;

In the simple inlineEdit demo, click on multiple instances of inlineEdit to set the container isEditing() mode to true.   Focus of previous inlineEdit instance should be lost. &#x20;

        