---json
{
  "title": "FLUID-890",
  "summary": "Text after newline character ignored",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-07-10T16:55:27.000-0400",
  "updated": "2008-11-07T12:45:48.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS X)\\\nFF2, IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-889/",
      "key": "FLUID-889"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:33:08.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-03T14:14:01.000-0500",
      "body": "This is a native browser/OS issue - pasting of  \"special characters\" is going to be something near difficult/impossible to intercept or modify by means of Javascript.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T12:45:48.000-0500",
      "body": "This issue cannot be resolved. I have added some material to the test cases which are supplied for <https://fluidproject.atlassian.net/browse/FLUID-1767#icft=FLUID-1767> to verify the phenomenon. \"Interestingly\", if the edit field is observed using the debugger at a critical point, the newlines will be preserved and the test will pass. If the field is not observed at any point in the cycle, the newline will be \"magically\" removed by the browser and the test will fail.\n"
    }
  ]
}
---
Any text after a newline character is ignored. It should wrap to another line.

Steps to reproduce:

1\) Open in-line edit demo from the the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Open an in-line edit field in edit mode

3\) cut & paste the following text:

"before newline\
after newline"

Notice that only the first line is displayed and all the text that came after the newline characters are ignored

        