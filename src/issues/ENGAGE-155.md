---json
{
  "title": "ENGAGE-155",
  "summary": "When expanding a cabinet drawer, the top of the drawer is not near the top of the screen.",
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
  "date": "2009-10-21T13:21:25.000-0400",
  "updated": "2017-12-22T09:44:33.652-0500",
  "versions": [
    "0.1",
    "0.3b"
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
      "url": "/browse/ENGAGE-153/",
      "key": "ENGAGE-153",
      "summary": "When expanding desctiption, the top of the description is not near the top of the screen."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:23:52.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-02-19T11:56:11.000-0500",
      "body": "See <http://wiki.fluidproject.org/display/fluid/Mobile+wireframes%2C+draft+9#Mobilewireframes%2Cdraft9-Guidelines...forelementexpansion%2Fcontraction> for expected expanding/collapsing behavior\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:33.650-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Touching the collapsed panel header should expand it, with the screen recentering such that the panel header is near the top, if the expanded panel would otherwise extend beneath the screen fold.

Go to: <http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021> . Move the screen so the drawer you are planning to click on is not at the top. Click to expand any drawer and notice that the top of the drawer is not at the top of the screen.

        