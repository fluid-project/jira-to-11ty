---json
{
  "title": "FLUID-450",
  "summary": "Reorderer: element style does not change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T14:55:42.000-0400",
  "updated": "2008-11-13T13:27:54.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T11:34:38.000-0400",
      "body": "I've removed this particular file from the list of test files in the protocol, as it is not suitable for testing purposes because of these very issues that Herb has found with it. It's sole purpose is as a step in a tutorial.\n"
    }
  ]
}
---
On the sortable unstyled to do list: the style of the list element the cursor is moved over does not change as the testing protocol requires.

        