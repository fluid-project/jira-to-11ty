---json
{
  "title": "FLUID-3790",
  "summary": "Progress Demo: Disabled Submit button missing aria-disabled property",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Golam Chowdhury",
  "reporter": "Jonathan Hung",
  "date": "2010-10-12T10:21:08.422-0400",
  "updated": "2010-10-15T10:30:03.826-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Progress"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-15T10:30:03.823-0400",
      "body": "The button has the \"disabled\" attribute attached when it is disabled. Since this is present, the aria-disabled attribute shouldn't be needed.\n"
    }
  ]
}
---
When the Submit button is disabled, it should have an aria-disabled property.

        