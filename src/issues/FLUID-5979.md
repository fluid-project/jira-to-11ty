---json
{
  "title": "FLUID-5979",
  "summary": "Change the default state of the Topics sidebar to hidden",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2016-10-06T12:09:41.119-0400",
  "updated": "2016-10-07T12:00:55.912-0400",
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
      "author": "Cindy Li",
      "date": "2016-10-07T12:00:55.910-0400",
      "body": "The pull request <https://github.com/fluid-project/docs-core/pull/4> has been merged into the master branch at 40847acb73ad4f00b0206cfb91a53b8924d29c82\n"
    }
  ]
}
---
Change the initial state of the sidebar to be hidden upon first visit to any docs site. Therefore the user will have to reveal the Topics sidebar in order to see the complete listing.

The affected file is DocsCore.js\
<https://github.com/fluid-project/docs-core/blob/master/src/static/js/DocsCore.js#L61>

        