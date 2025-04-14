---json
{
  "title": "FLUID-5035",
  "summary": "The reset icon and text become unaligned when comic sans or verdana fonts are used.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2013-06-05T10:46:08.911-0400",
  "updated": "2016-03-29T08:06:10.058-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 8, IE 9, IE 10\\\nFF, Safari, Chrome\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5035/screenshot-1.png",
      "filename": "screenshot-1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-05T10:46:56.602-0400",
      "body": "\"ScreenShot.png\" shows the reset icon and text misaligned when \"comic sans\" is used.\n"
    },
    {
      "author": "rajat dhyani",
      "date": "2016-03-04T13:32:04.272-0500",
      "body": "Respected Sir,\\\nThe link provide by you is not working.\\\nKindly provide an alternative link of this page.\n\nThank you,\\\nRajat Dhyani\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-06T15:28:06.200-0500",
      "body": "@Rajat I guess this is the new link,\\\n<http://build.fluidproject.org/infusion/demos/uiOptions/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-07T10:49:01.072-0500",
      "body": "@@sparsh paliwal and @@rajat dhyani, thanks, I've updated the link in the description.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2016-03-08T10:14:37.860-0500",
      "body": "In trying to get a new screen shot of this issue, I can not seem to reproduce the problem. I tested Win 10 IE 11, and FF on Mac.\n\nCan someone test and confirm that the bug is no longer present in the supported browsers?\n"
    },
    {
      "author": "Arnold Tagne",
      "date": "2016-03-17T10:22:25.538-0400",
      "body": "Well I tested it on these browsers(chrome, Safari, FF, IE10) and the issue arised on IE 10.\n\nI wish to know which tool(s) is used for testing live css on IE .\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-17T11:49:13.751-0400",
      "body": "@@Arnold Tagne IE 10 is no longer a supported browser. Currently we are supporting latest Chrome, Firefox Internet Explorer and Safari. Were you able to reproduce the issue in any of these browsers?\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-28T16:07:44.858-0400",
      "body": "@Justin Obara, I couldn't reproduce the problem too, on the browsers: Google Chrome, Mozilla Firefox, and Internet Explorer on Win 10. The bug seems solved by itself.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-29T08:06:10.041-0400",
      "body": "Can no longer reproduce. May have been resolved with browser updates.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the UIO demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/>

2\) Change the font to either "comic sans" or "verdana"\
Notice that the reset icon and text are no longer aligned.

        