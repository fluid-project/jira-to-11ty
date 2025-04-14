---json
{
  "title": "FLUID-4291",
  "summary": "UI Options: Add the new option \"prefix\" into UI Options template loader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-06-15T15:53:22.463-0400",
  "updated": "2011-06-17T12:31:02.549-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-06-15T15:53:50.515-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-17T12:30:55.428-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/78> merged into project repo at f8310470861d9f3f17a4bbfce8a03d2d778e4b29\n"
    }
  ]
}
---
The current UI Options template loader structure is:

templates: {\
uiOptions: "../html/UIOptions.html",\
textControls: "../html/UIOptionsTemplate-text.html",\
layoutControls: "../html/UIOptionsTemplate-layout.html",\
linksControls: "../html/UIOptionsTemplate-links.html"\
} &#x20;

As most of the time, the templates are from the same directory, add a new option for template path prefix to simplify the input:

prefix: "../html",\
templates: {\
uiOptions: "%prefix/UIOptions.html",\
textControls: "%prefix/UIOptionsTemplate-text.html",\
layoutControls: "%prefix/UIOptionsTemplate-layout.html",\
linksControls: "%prefix/UIOptionsTemplate-links.html"\
} &#x20;

        