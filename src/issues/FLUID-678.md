---json
{
  "title": "FLUID-678",
  "summary": "Drop warning appears when it shouldn't (drop marker is not a valid drop target)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-05-30T08:46:58.000-0400",
  "updated": "2008-08-13T15:22:00.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-30T11:06:32.000-0400",
      "body": "In the current implementation, drop markers are not drop targets. In order to fix this bug we would need to make drop markers a special type of drop target . Essentially, we would need to hide the drop warning when the drop marker got an 'over' event. This is very prone to speed of dragging issues that are very difficult, if not impossible, to work around. (See <https://fluidproject.atlassian.net/browse/FLUID-407#icft=FLUID-407> for a discussion on events arriving in the wrong order.)&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-13T15:22:00.000-0400",
      "body": "Verifed fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Allison reported:\
"If you drag the portlet in the upper-right hand side to the upper left, trying to put it above the locked portlet, you (properly) get a warning message. However, when you then immediately drag it over the upper right portlet without letting go of your mouse in between (so that it moves to the top right position) you **still** see the message"

        