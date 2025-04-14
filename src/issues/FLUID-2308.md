---json
{
  "title": "FLUID-2308",
  "summary": "Accordion contents displaying under both accordion bars",
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
  "date": "2009-03-04T09:27:30.000-0500",
  "updated": "2011-02-22T16:27:59.022-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE7 (Win XP, Win Vista)\\\nSafari 3.2 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2326/",
      "key": "FLUID-2326"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2308/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-04T09:28:28.000-0500",
      "body": "\"screenshot-1\" shows the contents of the accordion displayed incorrectly\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-09T16:25:12.000-0400",
      "body": "It appears the accordion problem is caused by it calculating the height before it was actually displayed. To solve this I have changed it to always be displayed, but off of the page when not needed. A better way to have done this would have been to use the accordions options clearStyle: true, and autoHeight: false. Unfortunately this caused an error in IE7.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T10:49:38.000-0400",
      "body": "Please verify and close if fixed\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.021-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Accordion contents displaying under both accordion bars

Steps to reproduce:

1\) Open the sakai mock-up page\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Open the UI Options dialog

3\) Notice the position of the contents under the accordion bars

        