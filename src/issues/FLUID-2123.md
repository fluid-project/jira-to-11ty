---json
{
  "title": "FLUID-2123",
  "summary": "Text over laps when font size and/or spacing is increased: using IE7",
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
  "date": "2009-01-13T14:04:05.000-0500",
  "updated": "2009-03-12T14:15:28.000-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE7 (Win Vista, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2123/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-13T14:04:29.000-0500",
      "body": "'screenshot-1' shows the overlapping text\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-20T13:50:40.000-0500",
      "body": "Still a problem but more so with Text over lapping radio buttons&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:15:28.000-0400",
      "body": "Appears to have been fixed\n\nTested using:\n\nIE7 (Win Vista)\n"
    }
  ]
}
---
Text over laps when font size and/or spacing is increased

Steps to reproduce:

1\) Open either the UI Options or Sakai mock-up example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Change increase the font size and/or spacing

Notice that the text over laps

        