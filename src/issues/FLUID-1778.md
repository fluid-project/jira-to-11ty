---json
{
  "title": "FLUID-1778",
  "summary": "Make InlineEdit event set consistent and complete",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2008-11-06T14:08:23.000-0500",
  "updated": "2011-02-22T16:27:49.912-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-06T14:23:22.000-0500",
      "body": "At revision 5965\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.911-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The "view-level" events fired by InlineEdit form an inconsistent and incomplete set. Whilst this is currently (onBeginEdit, afterBeginEdit, afterFinish), this should really be expanded and adjusted to (onBeginEdit, afterBeginEdit, onFinishEdit, afterFinishEdit).

        