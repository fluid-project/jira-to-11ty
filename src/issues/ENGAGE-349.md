---json
{
  "title": "ENGAGE-349",
  "summary": "All JavaScript and CSS resources for Engage should be concatenated and minified to reduce server round trips and bytes delivered",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T17:03:59.000-0500",
  "updated": "2017-12-22T09:44:32.501-0500",
  "versions": [
    "0.3b",
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-09T14:55:04.000-0500",
      "body": "The javascript is all concatenated now but the CSS still needs to be.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-09T15:30:02.000-0500",
      "body": "CSS concatenation has been an issue in Infusion as well. The issue is image URLs in individual stylesheets. If we concat together multiple stylesheets, we'll also need to move all the images around so that they remain relative to the concatenated file. It should be possible, but will require some extra code in our build process.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:32.500-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, each screen in Engage links to around 20 individual external resources, consisting of JavaScript and CSS dependencies. We should be able to get a fairly significant speed boost by concating and minifying all our resources. We should also ensure we're using a custom build of Infusion.

        