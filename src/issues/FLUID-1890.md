---json
{
  "title": "FLUID-1890",
  "summary": "Uploader Storycard 8:  Gray out uploaded files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Daphne Ogle",
  "date": "2008-12-02T13:35:19.000-0500",
  "updated": "2013-04-11T17:53:04.251-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1890/FLUID-1890.png",
      "filename": "FLUID-1890.png"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-01-29T18:10:26.000-0500",
      "body": "Currently the files are greyed out a bit. Actually took the suggestion of the green grey. I've attached a screen shot of the effect.&#x20;\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2009-01-30T00:02:47.000-0500",
      "body": "Looks good.  It's clear that the file is unactionable and that the action is complete.  I'll let you close or resolve Eli.  Not sure the right next step.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-04T17:03:10.000-0500",
      "body": "I agree with Daphne that the intended result has been achieved.\n"
    }
  ]
}
---
Details:

* Currently successfully uploaded files are green to match the success checkmark and the green bar indicator.  We would like the files and size to look unactionable by being grayed out.   Perhaps a green grey would work?  We need a better distinction between those uploaded and those still in the queue (particularly in an "add more" scenario).

        