---json
{
  "title": "FLUID-4114",
  "summary": "The inline edit demo page fails to load properly.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Golam Chowdhury",
  "date": "2011-02-24T13:19:11.404-0500",
  "updated": "2014-07-31T16:05:06.068-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE7 and IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T12:18:09.600-0400",
      "body": "In IE7, the source files never show up in the right hand side of the page. In IE8, they are present, but the line feeds are gone: the HTML and JS are all on a single line.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-07-31T16:05:06.066-0400",
      "body": "We are no longer supporting IE7 and 8\n"
    }
  ]
}
---
When trying to load the inline edit demo page it does not load the page completely. The demo codes are not showing on both IE7 and IE8. To reproduce download the infusion package and go to package/src/demos/inlineEdit/rich/demo.html.

        