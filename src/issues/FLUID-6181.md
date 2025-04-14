---json
{
  "title": "FLUID-6181",
  "summary": "Update links to Manual tests on build site",
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
  "date": "2017-08-10T08:55:18.714-0400",
  "updated": "2018-06-07T06:57:00.929-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the [build site](http://build.fluidproject.org) has links to HTML5 and jQuery UI versions of the various prefs editor manual tests. However, there is only one version now because we no longer support the jQuery UI slider for the textfield slider. The links should be updated to point at the correct manual test file.

        