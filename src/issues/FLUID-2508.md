---json
{
  "title": "FLUID-2508",
  "summary": "Turning on the table of contents causes an error: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-03T14:05:46.000-0400",
  "updated": "2009-04-13T10:47:09.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-13T10:47:09.000-0400",
      "body": "Unable to reproduce. May have been a caching issue\n"
    }
  ]
}
---
Turning on the table of contents causes an error

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>

2\) Turn on the table of contents

Notice that as soon as you select the yes radio button for the table contents, an error is thrown.

Error: Cannot convert undefined or null to object\
File: jQuery.js\
Line:911

        