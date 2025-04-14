---json
{
  "title": "FLUID-2350",
  "summary": "Toggle enhanced graphics without permanently removing them with no-background-images option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Jacob Farber",
  "date": "2009-03-13T16:55:29.000-0400",
  "updated": "2011-06-21T14:14:04.574-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-03-16T12:10:15.000-0400",
      "body": "On further discussion, we think we're going to seek anything fitting this pattern:\n\nfl- \\* -enhanced\n\nand alter it to&#x20;\n\nfl- \\* -simplified\n\nand vice-versa\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:41:44.012-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T13:50:47.086-0400",
      "body": "James, do you think we want to provide an enhanced graphics toggle in UIO?&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T13:52:08.160-0400",
      "body": "In the new designs we no longer have the no background images setting. James will decide on whether we should have an enhanced graphics setting or not.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-21T14:14:04.559-0400",
      "body": "This is no longer relevant in the new designs of UI Options.&#x20;\n"
    }
  ]
}
---
We can do a little better than a purely boolean "on/off" for certain FSS enhanced graphics featuers, by toggling "fl-\*-enhanced" class names

        