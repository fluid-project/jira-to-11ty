---json
{
  "title": "FLUID-1612",
  "summary": "Selection of inline edit text field puts caret at the end of editable text instead of highlighting all of the text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Joseph Vernuccio",
  "date": "2008-09-25T11:17:53.000-0400",
  "updated": "2011-01-14T09:53:25.563-0500",
  "versions": [
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
    "Demos",
    "Inline Edit"
  ],
  "environment": "FF3, Safari 3.1 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2014/",
      "key": "FLUID-2014"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2435/",
      "key": "FLUID-2435"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1612/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1612/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T11:19:10.000-0400",
      "body": "screenshot-1 of bug on Sakai annoucement board.&#x20;\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T11:20:45.000-0400",
      "body": "screenshot-2 of how the editable text line should appear on the Sakai annoucement board. This example is from the bSpace.\n"
    },
    {
      "author": "Joseph Vernuccio",
      "date": "2008-09-25T12:30:29.000-0400",
      "body": "Issue seems to repeat itself in FF2 on Mac OS X 10.5.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-16T11:33:35.000-0500",
      "body": "NOTE that this error does NOT occur in the bSpace example at\\\n<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-16T11:35:34.000-0500",
      "body": "In fact, whether or not the text is all selected on edit is an option: the \"selectOnEdit\" option (see <http://wiki.fluidproject.org/display/fluid/Inline+Edit+API> )\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2008-12-16T12:26:07.000-0500",
      "body": "This \"bug\" is found on the inline edit springboard test page as well; it also occurs when you use the tab key to select the editable text field.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T11:37:52.000-0400",
      "body": "My 1st Bug\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T15:19:47.332-0500",
      "body": "This issue is specific to demonstration code that is no longer being supported. The selectOnEdit option addresses this issue.\n"
    }
  ]
}
---
When selecting an inline edit text field on the Sakai announcement board, the caret appears at the end of the editable text rather then highlighting the text as it does on the bSpace section.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\. Using mouse, click on a inline edit text line.&#x20;

3\. Inline edit should change to a editable  text line.&#x20;

4\. Pointer should change into I-bar and caret should appear at end of current text.&#x20;

        