---json
{
  "title": "FLUID-3714",
  "summary": "Improve Infusion's tutorials for the 1.4 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2010-09-07T10:45:39.401-0400",
  "updated": "2014-03-03T13:41:35.054-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-09-07T11:14:36.976-0400",
      "body": "Here's a thread on the Infusion-users mailing list explaining how to use the Reorderer with a JSON-based callback: <http://fluidproject.org/pipermail/infusion-users/2010-July/000204.html>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-09-07T11:15:54.074-0400",
      "body": "Here's a conversation in #fluid-work explaining how to render tables with the Renderer: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2010-06-16>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-09-27T14:16:56.935-0400",
      "body": "Colin, could you elaborate on what you're envisioning for the JSON-based reorderer callback? I've reviewed the information at\\\n<http://wiki.fluidproject.org/display/fluid/Talking+to+the+Server+Using+The+afterMove+Event>\\\nWhat changes are you thinking of?\n"
    }
  ]
}
---
As we introduce new framework features to Infusion, we'll want to improve our existing documentation coverage, including demos, sample code and tutorials.

Some ideas off the top of my head:

1\. Simple Renderer tutorials: how to render tables, checkboxes, etc. alone\
2\. Finish the tutorial for using the Reorderer with a JSON-based callback

        