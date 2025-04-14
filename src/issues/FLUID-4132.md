---json
{
  "title": "FLUID-4132",
  "summary": "Remove FCKEditor support from richtext inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-03-03T12:01:17.534-0500",
  "updated": "2011-06-20T16:01:34.401-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
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
      "date": "2011-05-17T09:42:31.607-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-06-08T05:26:55.103-0400",
      "body": "This was erroneously committed by me during the process of committing an unrelated fix - but the basic resolution of this JIRA is sound, and the remaining failures are being accounted for as a regression against <https://fluidproject.atlassian.net/browse/FLUID-3909#icft=FLUID-3909>\n"
    }
  ]
}
---
FCKEditor has been replaced by CKEditor. We had deprecated FCKEditor a while back now, and should remove it from the code base.

        