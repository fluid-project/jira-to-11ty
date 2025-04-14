---json
{
  "title": "FLUID-2661",
  "summary": "Problems clicking the \"Edit Appearance\" button on first page load: using IE 7",
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
  "date": "2009-05-11T11:22:32.000-0400",
  "updated": "2009-06-02T10:50:25.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2661/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-11T11:24:21.000-0400",
      "body": "\"screenshot-1\" shows the two \"Edit Appearance\" buttons\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:10:20.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:50:25.000-0400",
      "body": "Appears to have been fixed with one of the many changes made during bug parade for 1.1\n\nTested using:\\\nIE 7 (Win Vista)\n"
    }
  ]
}
---
Problems clicking the "Edit Appearance" button on first page load

Steps to reproduce:

1\) Open the Sakai Mock-up example from the daily build site:\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Attempt to click the "Edit Appearance" button. Notice that it is not click able

3\) Move the mouse below the "Edit Appearance" button. Notice that another "Edit Appearance" button now appears and is clickable.

        