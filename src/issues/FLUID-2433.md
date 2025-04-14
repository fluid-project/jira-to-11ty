---json
{
  "title": "FLUID-2433",
  "summary": "The textfield does not expand vertically to fit the increased text size: using IE",
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
  "date": "2009-04-01T10:43:07.000-0400",
  "updated": "2014-04-02T16:38:15.470-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2371/",
      "key": "FLUID-2371",
      "summary": "Resizing the text does not change the size of the text's container, in the dialog"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2434/",
      "key": "FLUID-2434"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2518/",
      "key": "FLUID-2518"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:38:15.468-0400",
      "body": "FSS is deprecated.\n"
    }
  ]
}
---
The textfield does not expand vertically to fit the increased text size

Steps to reproduce:

1\) Open the FSS.Text.Size example\
<http://build.fluidproject.org/infusion/tests/framework-tests/fss/html/4.fss.text.size.html>

2\) Notice that the text fields with the larger text size have the text cut off.

        