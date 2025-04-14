---json
{
  "title": "FLUID-3796",
  "summary": "Move all strings used by the component into a strings block in the components defaults",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-10-13T15:13:16.793-0400",
  "updated": "2010-10-18T08:48:45.335-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
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
      "date": "2010-10-13T15:14:13.074-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-14T10:37:14.694-0400",
      "body": "Moved the ariaBusyText and ariaDoneText into a strings block.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T08:48:45.290-0400",
      "body": "Colin, Golam, and myself walked through the code and reviewed the changes.\n"
    }
  ]
}
---
Currently the progress component has strings in the options, but they are not contained with in a strings block.

        