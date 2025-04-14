---json
{
  "title": "FLUID-2210",
  "summary": "Need to create a converter between the parameter formats for SWFUpload and Gears for things like file types.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-02-09T12:47:05.000-0500",
  "updated": "2011-05-17T11:53:25.395-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-05-17T11:53:25.393-0400",
      "body": "While we no longer support a Gears version of the Uploader, this work is equally relevant to the HTML5 version. mlam has completed this work in this context under other JIRA numbers, and this issue can be closed.\n"
    }
  ]
}
---
At the moment, SWFUpload and Gears use different formats for specifying things like file types. We don't want to expose our users to this variation. Let's settle on a consistent format (probably Gears') and convert between the two.

        