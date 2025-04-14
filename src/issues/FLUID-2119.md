---json
{
  "title": "FLUID-2119",
  "summary": "Header text will remain in a fixed location on the screen when scrolling with the mouse scroll wheel; using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-01-13T13:37:24.000-0500",
  "updated": "2009-01-27T09:09:35.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2119/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T13:39:09.000-0500",
      "body": "'screenshot-1' shows some text fixed, while others scrolled\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-27T09:09:35.000-0500",
      "body": "Appears to have been resolved with the changes if updating the UI Options component\n\nTested using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
Header text will remain in a fixed location on the screen when scrolling with the mouse scroll wheel; using IE6

Steps to reproduce:

1\) Open the sakai mock-up example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Adjust the size of the browser or increase the size of the font, so that a vertical scroll bar appears.

3\) Using the mouse scroll wheel, scroll the page.

Notice that some of the text remains fixed while others scroll

        