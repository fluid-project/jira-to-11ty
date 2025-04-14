---json
{
  "title": "FLUID-1745",
  "summary": "Springboards: Hovering over \"DNA Polymorphism Exam on Thursday\" makes it wrap to a second line",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-10-30T12:51:52.000-0400",
  "updated": "2011-01-14T09:53:25.358-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "FF3 (Mac OS 10.5, Win 2000, Win Vista, Win XP)\\\nFF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1745/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1745/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T12:54:20.000-0400",
      "body": "'screenshot-1' shows the text \"DNA Polymorphism Exam on Thursday\" in one line, when the mouse isn't hovering over it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T12:55:27.000-0400",
      "body": "'screenshot-2' shows the text \"DNA Polymorphism Exam on Thursday\" on two lines when the mouse hovers over it.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-30T12:58:17.000-0400",
      "body": "removed negative margin bug\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:44:18.000-0500",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5, Win 2000, Win Vista, Win XP)\\\nFF2 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Hovering over "DNA Polymorphism Exam on Thursday" makes it wrap to a second line

Steps to reproduce:

1\) Open the inline edit springboards demo from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/InlineEdit.html>

2\) Hover over the text "DNA Polymorphism Exam on Thursday" in either example 4 or 5

Notice that as you hover over the text, it wraps to a second line.

        