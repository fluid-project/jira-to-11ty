---json
{
  "title": "FLUID-1588",
  "summary": "Keyboard accessibility for Uploader can't get past the first item in the file queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Eli Cochran",
  "date": "2008-09-18T15:49:30.000-0400",
  "updated": "2008-12-03T11:51:17.000-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF3\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-19T10:17:27.000-0400",
      "body": "This was fixed by updating the orientation default to a correct value.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:51:17.000-0500",
      "body": "appears to be fixed\n"
    }
  ]
}
---
Where once the you could happily keyboard through the Uploader, now you can only tab to the first item in the Uploader file queue

        