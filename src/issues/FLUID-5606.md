---json
{
  "title": "FLUID-5606",
  "summary": "Update the tooltip to be a relay component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2015-03-19T10:47:19.737-0400",
  "updated": "2015-11-03T11:27:26.027-0500",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Tooltip"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-280/",
      "key": "FLOE-280"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-03-24T12:59:59.292-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/590>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-03-26T09:23:38.000-0400",
      "body": "Merged @ a930d31ca6430dad67566e712ccad5d333d74ddb\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:20.642-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
While it makes sense to upgrade all of our component to be relay components, for the tooltip in particular it is necessary as it will be used in the first discovery tool. The first discovery tool will be upgraded to use relay components as it uses the prefsFramework internally.&#x20;

This work has come out of attempting to upgrade Infusion in the first discovery tool to address issues with model transformations for <https://fluidproject.atlassian.net/browse/FLOE-280#icft=FLOE-280>

        