---json
{
  "title": "FLUID-1067",
  "summary": "Entering a long string of text inside an inline edit field, which wraps to a new line, will overlap the previous line.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-07-29T13:58:51.000-0400",
  "updated": "2011-01-04T15:24:36.729-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1067/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1067/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-29T13:59:50.000-0400",
      "body": "'screenshot-1' look at the tail of the 'g'&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-29T14:01:13.000-0400",
      "body": "'screenshot-2' - the overlapping is most noticable at the end of the second line\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T09:24:00.000-0400",
      "body": "Doesn't seem to occur in the bSpace example (<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>)\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T14:44:31.953-0500",
      "body": "Tested in FF3.6 and IE8 on Windows. Does not appear to be an issue in the current simple inline edit demo:\\\n<http://build.fluidproject.org/infusion/demos/inlineEdit/simple/demo.html>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-04T15:24:36.723-0500",
      "body": "Doesn't happen on Mac FF3.6 or Safari5\n"
    }
  ]
}
---
Entering a long string of text inside an inline edit field, which wraps to a new line, will overlap the previous line.

Steps to reproduce:

1\) Open the inline edit demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Enter in a long string of text, which contains spaces, into one of the inline edit fileds (e.g. "This is a long message indicating that when the sting of text is displayed on two lines, the lower line slightly overlaps the above line")

3\) Press the 'enter' key to save the edit. Notice that when the text wraps to a second line it slightly overlaps the first line. This can be seen by the tails of the 'g' looking like dots. If you hover over the inline edit field, you can see the yellow highlighting overlapping.

        