---json
{
  "title": "FLUID-1320",
  "summary": "Typing \"Click here to edit\" is equivalent to erasing all the text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-27T11:29:41.000-0400",
  "updated": "2009-08-08T10:27:46.000-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1320/patch.txt",
      "filename": "patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1320/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-09-04T12:04:29.000-0400",
      "body": "Interesting. This will actually be the case any time the text that is typed is the same as the 'empty field' invitation text. If the invitation text is different than the default \"Click here to edit,\" then you would have to type the different text to see this bug. You can try this on the manual test page:\\\n<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>\n\nThe problem is caused by the way the inline edit decides whether or not the field contains text that the user typed, or the invitation text. It compares the text to the invitation text, and if they are the same, it assumes that the invitation text is there because the user left the field empty.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T11:08:20.000-0400",
      "body": "My 1st Bug\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:20:13.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "y z",
      "date": "2009-08-06T10:06:41.000-0400",
      "body": "Patch fixes the error with Click here to edit&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-06T19:56:45.000-0400",
      "body": "Committed to trunk and branch - thanks for patch.\n"
    },
    {
      "author": "y z",
      "date": "2009-08-07T16:24:39.000-0400",
      "body": "added and fixed test cases for inline edit\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-08T10:27:46.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, FF3.5, Opera 9.6, Safari 3, Safari 4 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.6 (Win XP)\n"
    }
  ]
}
---
If you edit an inline edit field with the  text "Click here to edit" it is equivalent to deleting all of the content of the field.

Steps to reproduce:

1\) Open one of the inline edit demos from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Edit the text of one of the inline edit fields to "Click here to edit"

3\) Click the inline edit field again and notice that there is no text displayed.&#x20;

dev-iteration43

        