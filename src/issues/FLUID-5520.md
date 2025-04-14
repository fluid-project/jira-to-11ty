---json
{
  "title": "FLUID-5520",
  "summary": "Add Learner Options and contrast themes to the Fluid website",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-10-06T09:17:08.930-0400",
  "updated": "2014-10-31T15:35:13.809-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-10-27T10:09:56.969-0400",
      "body": "Jon, I'm hoping you can review my branch for this and merge it into your <https://fluidproject.atlassian.net/browse/FLUID-5451#icft=FLUID-5451> branch before submitting a pull request for the whole thing.\n"
    }
  ]
}
---
Add Learner Options and contrast themes to the new Fluid website.

Notes:

* Scripts should be included by adding lines to the scrips block in docpad.coffee file.
* SCSS and other build tools should be leveraged to build contrast themes simply.
* Be sure to document the best approach to generating themes on the wiki

        