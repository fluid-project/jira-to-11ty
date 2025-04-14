---json
{
  "title": "FLUID-3201",
  "summary": "add error checking to PostClass.php - getFluidVersionNumber",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-09-22T15:43:13.000-0400",
  "updated": "2009-10-02T12:41:49.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3213/",
      "key": "FLUID-3213",
      "summary": "add class to parse build.properties and check for formatting errors"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-28T13:59:27.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T16:09:21.000-0400",
      "body": "Added error checking for file not opening and also for mysql errors. Further work could be done to fix the reg\\_ex error checking (see <https://fluidproject.atlassian.net/browse/FLUID-3213#icft=FLUID-3213>).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-09-29T16:10:05.000-0400",
      "body": "manage regex parsing of build.properties, including error checking.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-02T10:36:29.000-0400",
      "body": "Commit rev. 8161 for this bug is difficult to review since the diff file shows the entire file has changed.\\\nAs best as I can tell, the function getFluidVersionNumber looks ok though.\n"
    }
  ]
}
---
I wrote this pretty quickly and it could benefit from some error checking in case the file or the line within the file are not found.

        