---json
{
  "title": "FLUID-2518",
  "summary": "Button not long enough to contain all of its text label",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-04T10:39:54.000-0400",
  "updated": "2015-06-26T10:01:46.837-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2433/",
      "key": "FLUID-2433",
      "summary": "The textfield does not expand vertically to fit the increased text size: using IE"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2518/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-04T10:41:06.000-0400",
      "body": "'screenshot-1' shows the text on the buttons on the right border\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-04T10:42:02.000-0400",
      "body": "Occurs in all text tests\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T09:30:11.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:27.210-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:53.924-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Button not long enough to contain all of its text label

Steps to reproduce:

1\) Open the FSS.Text.Size test\
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/4.fss.text.size.html>

Notice that the text is flush to the right border of the button

        