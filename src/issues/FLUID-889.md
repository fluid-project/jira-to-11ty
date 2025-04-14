---json
{
  "title": "FLUID-889",
  "summary": "Newline character displayed as single space, using FF3",
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
  "date": "2008-07-10T16:06:50.000-0400",
  "updated": "2008-11-07T13:07:24.000-0500",
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
  "environment": "FF3 (Mac OS X, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-890/",
      "key": "FLUID-890",
      "summary": "Text after newline character ignored"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-889/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-10T16:08:40.000-0400",
      "body": "'screenshot-1' shows how the text is displayed by in-line edit\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:33:01.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:07:24.000-0500",
      "body": "This issue cannot be resolved, for similar reasons to <https://fluidproject.atlassian.net/browse/FLUID-890#icft=FLUID-890> and others. Support for multi-line operations in single-line fields in browsers is fundamentally inconsistent, and if multi-line operations are required, the integrator must supply a multi-line edit view.\n"
    }
  ]
}
---
When cut & pasting text containing a newline character into an in-line edit field, the newline character is displayed as a single space without any wrapping. The text should be displayed on two seperate lines.

Steps to reproduce:

1\) Open the in-line edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Open an in-line edit field in edit mode

3\) cut & paste the following text into the in-line edit field

"before newline\
after newline"

4\) press enter to leave edit mode. Notice that the text is displayed in a single continuous line with only a single whitespace sepererating what was two lines of text. Notice that in edit mode the new line character is also transformed into a single space.

        