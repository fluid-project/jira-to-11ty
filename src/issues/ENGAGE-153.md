---json
{
  "title": "ENGAGE-153",
  "summary": "When expanding desctiption, the top of the description is not near the top of the screen.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "y z",
  "date": "2009-10-21T13:18:00.000-0400",
  "updated": "2017-12-22T09:44:31.309-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-155/",
      "key": "ENGAGE-155"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:24:01.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T11:56:52.000-0500",
      "body": "See <http://wiki.fluidproject.org/display/fluid/Mobile+wireframes%2C+draft+9#Mobilewireframes%2Cdraft9-Guidelines...forelementexpansion%2Fcontraction> for expected expanding/collapsing behavior&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:31.307-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The screen should recenter such that the top of the description is near the top, if the expanded description would otherwise extend beneath the screen fold.

Go to: <http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021> . Position the page so that the "+" expand description is at the bottom of the screen, click on it and notice that top of the description did not move to the top and that there is no feedback that the description expanded.

        