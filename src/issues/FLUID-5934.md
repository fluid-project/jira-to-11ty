---json
{
  "title": "FLUID-5934",
  "summary": "UIO tutorial contains invalid template and message prefix path",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2016-07-25T14:13:06.059-0400",
  "updated": "2016-08-22T15:40:18.368-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-08-22T15:40:14.890-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion-docs/pull/96> has been merged into the infusion master branch at 58e103d5becdc1799408b1c4ed6c591328de4ed7\n"
    }
  ]
}
---
The templatePrefix, and messagePrefix paths in the UIO tutorial is incorrect. The paths contain an extra trailing slash which should not be there.

See: <http://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html>

Example:\
terms: {\
templatePrefix: "lib/infusion/framework/preferences/html/",\
messagePrefix: "lib/infusion/framework/preferences/messages/"\
}

        