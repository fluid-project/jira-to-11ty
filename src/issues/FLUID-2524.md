---json
{
  "title": "FLUID-2524",
  "summary": "scrolling the screen while the UI Options dialog is open, will cause it's contents to appear distorted: using IE",
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
  "date": "2009-04-06T10:18:06.000-0400",
  "updated": "2009-06-03T13:04:40.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2524/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-06T10:18:38.000-0400",
      "body": "'screenshot-1' shows the styling issues&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-03T13:04:40.000-0400",
      "body": "Appears to have been fixed. Possibly with the change to a jQuery UI Dialog\n\nTested using:\\\nIE 6 (Win 2000)\n"
    }
  ]
}
---
scrolling the screen while the UI Options dialog is open, will cause it's contents to appear distorted

Steps to reproduce:

1\) Open the Sakai Mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Adjust the window size so that a vertical scroll bar appears

3\) Scroll the page up and down&#x20;

Notice that the contents of the dialog become distorted

        