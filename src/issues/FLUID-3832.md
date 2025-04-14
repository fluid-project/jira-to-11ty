---json
{
  "title": "FLUID-3832",
  "summary": "Setting page size 0 or empty crashes the browser",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2010-11-12T15:33:58.085-0500",
  "updated": "2016-12-19T17:37:48.749-0500",
  "versions": [
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Chrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFirefox & IE8 (win xp)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<http://build.fluidproject.org/infusion/demos/pager/>\
Setting page size to 0 or left empty crashes firefox. IE8 reports:

Stop running this script? A script on this page is causing IE to run slowly. If it continues on, your computer might become unresponsive.

Seems an infinite loop is resulted. The error handling is required in this case.

        