---json
{
  "title": "FLUID-2052",
  "summary": "Cannot tab away from the \"Browse Files\" button with Flash 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-01-05T12:58:29.000-0500",
  "updated": "2014-04-02T15:10:43.030-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF3 (Win Vista, Win XP, Mac) Flash 10\\\nFF2 (Mac) Flash 10\\\nIE 8 (Win 7)\\\nIE 9 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2021/",
      "key": "FLUID-2021",
      "summary": "Cannot upload files with the keyboard: Using FF"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2502/",
      "key": "FLUID-2502"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-08T08:47:36.000-0500",
      "body": "It seems as though you are able to shift-tab away after adding files to the file queue, likely because focus is on a file in the file queue and not on the flash movie.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T14:58:48.000-0400",
      "body": "a11y issue&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T14:02:09.000-0400",
      "body": "This is an issue that only Adobe can fix, but so far they seem unwilling. The best fix for us is to deprecate the Flash-based Uploader in favour of HTML 5 uploads where the browser supports it.\n"
    },
    {
      "author": "y z",
      "date": "2010-04-05T18:13:13.000-0400",
      "body": "This is also an issue in IE 8 , WIN 7\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:10:43.021-0400",
      "body": "This is not an issue in HTML5 browsers\n"
    }
  ]
}
---
Cannot tab away from the "Browse Files" button with Flash 10; using FF3

Steps to reproduce:

1\) Open the Uploader demo from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Tap the 'tab' key until the "Browse Files" button has focus.&#x20;

Notice that you are not able to use the keyboard to navigate away from the "Browse Files" button.

        