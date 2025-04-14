---json
{
  "title": "FLUID-2522",
  "summary": "The slider's text field will expand with the text typed in it: using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-04-06T10:07:12.000-0400",
  "updated": "2013-10-04T10:25:06.949-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2522/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-06T10:08:11.000-0400",
      "body": "'screenshot-1'  shows the text field expanded to fit the 9 digits\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T11:07:41.437-0400",
      "body": "I've tested this in v1.4, and it is no longer happening.\n"
    }
  ]
}
---
The slider's text field will expand with the text typed in it

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>

2\) Begin typing into one of the text fields next to one of the sliders

Notice that as you type, the text field will expand with the number of characters entered. It should  just scroll inside of the text field

        