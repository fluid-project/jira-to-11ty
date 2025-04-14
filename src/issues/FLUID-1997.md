---json
{
  "title": "FLUID-1997",
  "summary": "Preview window displayed to the right of the options in simple layout instead of below: Using IE",
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
  "date": "2008-12-17T09:34:53.000-0500",
  "updated": "2009-01-06T09:19:54.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7(Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1997/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T09:35:56.000-0500",
      "body": "'screenshot-1' shows the preview window in the wrong location in simple layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T09:19:54.000-0500",
      "body": "Appears to have been fixed\n\nVerified using:\n\nIE 6 (Win XP)\\\nIE 7 (Win Vista)\n"
    }
  ]
}
---
Preview window displayed to the right of the options in simple layout instead of below

Steps to reproduce:

1\) Open the Sakai mock-up or UI Options example:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Click "Edit Appearance"

3\) Change the layout to simple and save the changes

Notice that the preview window is to the right of the options, instead of being placed below them

        