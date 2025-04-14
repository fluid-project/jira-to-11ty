---json
{
  "title": "FLUID-2314",
  "summary": "Radio button not properly rendered: using IE",
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
  "date": "2009-03-06T10:24:24.000-0500",
  "updated": "2009-03-12T12:45:13.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7(Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2314/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-06T10:25:38.000-0500",
      "body": "'screenshot-1' shows the radio buttons that aren't rendered correctly.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:45:13.000-0400",
      "body": "Appears to have been fixed\n\nTested using\n\nIE6 (Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
Radio button not properly rendered

Steps to reproduce:

1\) Open the UI Options example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

Notice that the radio buttons beside "Simple Layout" and "Background Images" just have one radio button that's labeled choice.&#x20;

        