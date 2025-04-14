---json
{
  "title": "FLUID-5788",
  "summary": "The \"edit on github\" link should be intelligently created - not from a hardcoded URL",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2015-10-07T15:24:24.688-0400",
  "updated": "2016-07-08T09:03:28.524-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-10-07T15:25:19.301-0400",
      "body": "For now, we will document both docpad.js and the README.md file to instruct users to change it.\n"
    }
  ]
}
---
the "edit on github" link is created using a hard coded URL located in the docpad.js file.

This requires each new site to manually set this URL in order for those links to behave properly.

We should investigate if there's a way to automate this that doesn't depend on a hard coded URL.

        