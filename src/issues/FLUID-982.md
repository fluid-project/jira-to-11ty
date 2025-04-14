---json
{
  "title": "FLUID-982",
  "summary": "Programmatically focus the Upload, Browse Files, and Done buttons at the appropriate times.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Colin Clark",
  "date": "2008-07-22T19:02:06.000-0400",
  "updated": "2011-02-22T16:27:48.810-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-660/",
      "key": "FLUID-660"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-23T22:08:48.000-0400",
      "body": "Added the appropriate focus actions based on: <http://wiki.fluidproject.org/display/fluid/Uploader+-+Keyboard+Interaction>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:48.809-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At certain times, buttons should be programmatically focussed. Here's a list of the desired behaviour:

<http://wiki.fluidproject.org/display/fluid/Uploader+-+Keyboard+Interaction>

        