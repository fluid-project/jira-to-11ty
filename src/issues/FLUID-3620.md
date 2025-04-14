---json
{
  "title": "FLUID-3620",
  "summary": "Upon openning UI Options, the accordion appears too far to the right until hovered over: using ie 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-04-09T09:41:51.000-0400",
  "updated": "2011-03-04T15:47:42.586-0500",
  "versions": [
    "1.2beta1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3620/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-09T09:44:38.000-0400",
      "body": "screenshot-1 shows the accordion panel showing up too far too the right\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-04T15:47:42.575-0500",
      "body": "This is no longer an issue since the accordion was removed in the new designs of UI Options.&#x20;\n"
    }
  ]
}
---
Upon openning UI Options, the accordion appears too far to the right until hovered over

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Click "Edit Appearance" to pull open UI Options

Notice that the accordion is rendered slightly to far to the right so that it is overlapping the preview.

Note that when you hover over it, it will snap back to the correct location

        