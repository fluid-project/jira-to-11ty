---json
{
  "title": "FLUID-6154",
  "summary": "Panel headings in small screens are misaligned on IE 11",
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
  "date": "2017-04-27T12:17:32.753-0400",
  "updated": "2021-06-22T13:23:04.295-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "IE 11 ( Win 7 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6154/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-04-27T12:19:55.987-0400",
      "body": "screenshot.png shows an example of the misaligned headers.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T13:22:59.785-0400",
      "body": "No longer support IE 11\n"
    }
  ]
}
---
After adding in the arrows beside the headers ( see: <https://fluidproject.atlassian.net/browse/FLUID-5534#icft=FLUID-5534> ), the headings no longer line up for the adjuster panels in IE 11 when viewed in a small width screen. This seems to have to do something with the use of a flex box layout ( display: flex ) on the h2; which is required to laying out the header text and arrows properly.

 

Steps to reproduce:

1. Open the [UI Options demo](http://build.fluidproject.org/infusion/demos/uiOptions/) in IE 11
2. Shrink the windows width until the "mobile" view is displayed.
3. Scroll through the available preferences
4. Notice that the headings for each panel are at different heights

        