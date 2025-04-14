---json
{
  "title": "FLUID-3425",
  "summary": "Bring back the user-visible descriptions for each module in the Infusion Builder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Colin Clark",
  "date": "2009-12-10T21:16:46.000-0500",
  "updated": "2009-12-11T12:08:17.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-12-10T21:17:52.000-0500",
      "body": "Bug Parade Builder 1.1.2\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-12-11T10:21:30.000-0500",
      "body": "Added the visible descriptions back in, reassigning this ticket back to Laurel to finish testing them.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-11T11:51:29.000-0500",
      "body": "Completed changes to unit tests. Need to test this interface in several browsers and check with screen readers.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-11T12:08:17.000-0500",
      "body": "I've reviewed both Jacob's and Laurel's changes and they look good. +1 for inclusion in the Builder release.\n\nIssues of testing across browsers and ATs can be filed against <https://fluidproject.atlassian.net/browse/FLUID-3359#icft=FLUID-3359>, the specific task related to the new Builder look and feel.\n"
    }
  ]
}
---
We've gone through a few extra design iterations and decided that we want to back to the design where each module description is visible to all users. This will improve accessibility and generally make Builder easier for newcomers to understand.

This will involve two main steps:

1\. Bring back the implementation that shows the descriptions for each module, as well as the associated unit tests. These were removed at r8844 and r8845\
2\. Bring back any necessary HTML and CSS required to display these in an awesome way.

        