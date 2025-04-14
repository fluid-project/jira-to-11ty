---json
{
  "title": "FLUID-992",
  "summary": "Cursor hidden when entering edit mode.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-07-23T13:46:27.000-0400",
  "updated": "2008-11-13T21:29:06.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1528/",
      "key": "FLUID-1528",
      "summary": "Text that is displayed on more than one line will not be completely visible in edit mode."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-972/",
      "key": "FLUID-972",
      "summary": "Text with words seperated by multiple spaces, aren't completely  visible when re-entering edit mode"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-992/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-23T13:47:38.000-0400",
      "body": "'screenshot-1' shows the text field too small for the text it contains and the cursor hidden.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T09:56:56.000-0400",
      "body": "resolved with fix for fluid-936.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T10:07:00.000-0400",
      "body": "Reopened as original fix for <https://fluidproject.atlassian.net/browse/FLUID-936#icft=FLUID-936> forced the caret to the front. \\\nThis went against the spec, which wanted the caret at the end (<https://fluidproject.atlassian.net/browse/FLUID-1047#icft=FLUID-1047>).&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T13:26:54.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T17:08:16.000-0500",
      "body": "Fixed at revision 5980\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-10T08:47:21.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:29:06.000-0500",
      "body": "This fix was found problematic in the case where the field text ended with a non-alphanumeric character. Has been refixed as part of 6031.\n"
    }
  ]
}
---
When entering edit mode, the cursor is displayed at the end of the text. If the text is too long to fit in the text field, the cursor is hidden from view.

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Click on the last inline edit field. Notice that the text is too long for the text field and that the cursor is hidden.

        