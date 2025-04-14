---json
{
  "title": "FLUID-2055",
  "summary": "Remove duplicate \"Edit Appearance\" button in Sakai demo",
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
  "date": "2009-01-06T10:36:46.000-0500",
  "updated": "2011-06-27T15:23:24.565-0400",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2832/",
      "key": "FLUID-2832"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2055/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-06T10:38:37.000-0500",
      "body": "'screenshot-1' shows the bottom of the \"Edit Appearance\" button missing, and the scrollbar to the far right\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-17T08:57:21.000-0400",
      "body": "Updated Environments, as it is now only an issue with Safari\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-27T15:23:24.563-0400",
      "body": "This issue was fixed by moving to the fat panel UIO.&#x20;\n"
    }
  ]
}
---
See <http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

There should only be one "Edit Appearance" button on the sakai demo. James suggests removing the bottom button and redesigning for the top. If we remove the top, rethink the sliding panel interaction from the top.

        