---json
{
  "title": "FLUID-4708",
  "summary": "The hidden panel with fat panel UIO is keyboard and screen reader accessible",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2012-05-16T11:15:07.157-0400",
  "updated": "2013-10-04T09:21:20.534-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "firefox, IE, safari\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/VP-70/",
      "key": "VP-70"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2012-05-17T12:04:19.254-0400",
      "body": "Merged into project repo at 35d490f8007947b92748ca9ebf790955eac71d82\n"
    }
  ]
}
---
1\. open up <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html>\
2\. start tabbing. The first a few focus are on the form fields of the hidden UIO panel even though they are invisible\
3\. the same issue happens after the panel is open and closed, as well as with using screen readers.

The hidden UIO panel should not be keyboard or screen reader accessible.

        