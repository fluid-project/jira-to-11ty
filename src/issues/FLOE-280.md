---json
{
  "title": "FLOE-280",
  "summary": "Implement the speak text adjuster",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-02-19T12:29:10.098-0500",
  "updated": "2015-11-03T11:27:26.254-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5552/",
      "key": "FLUID-5552",
      "summary": "Upgrade the Prefs Framework to use the core Model Relay functionality instead of its own."
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5606/",
      "key": "FLUID-5606",
      "summary": "Update the tooltip to be a relay component"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-20T16:02:39.834-0500",
      "body": "work currently underway in <https://github.com/jobara/first-discovery/tree/FLOE-280>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-19T12:22:14.049-0400",
      "body": "requires FLUID-5552 and FLUID-5606. After those are both merged into master, Infusion will need to be updated in the First Discovery Tool.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-03-27T09:21:00.843-0400",
      "body": "Submitted two pull requests:\n\n1\\) Infusion Upgrade\\\n<https://github.com/fluid-project/first-discovery/pull/27>\n\n2\\) speak text adjuster\\\n<https://github.com/fluid-project/first-discovery/pull/28>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-03-27T11:58:34.040-0400",
      "body": "The pull request #27 for the infusion upgrade has been merged @ 5c048f2c043d8b3f06eeebe39d144c21f3e8d711\n\nThe pull request #28 for adding speak text adjuster has been merged @ 910bb5f2e0a366f01cbeb7ff8ea3bdd7ca1c8d47\n"
    }
  ]
}
---
Implement the speak text adjuster which will allow a user to specify their preference for self voicing / screenreader.&#x20;

An accompanying enactor is not required as the First Discovery Tool provides its own means of self voicing.

<http://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2029%2015%20small.pdf>

        