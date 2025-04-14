---json
{
  "title": "ENGAGE-160",
  "summary": "A collapsed \"Tags\" panel exists without tags",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Tona Monjo",
  "date": "2009-10-21T16:18:34.000-0400",
  "updated": "2010-02-01T11:45:33.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": "IPhone\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-145/",
      "key": "ENGAGE-145",
      "summary": "Default tombstone infomation is displayed instead of not being displayed at all."
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-149/",
      "key": "ENGAGE-149",
      "summary": "Artifact view has displays description text \"Description Information\", but instead should be invisible since there is no desctiption available for the artifact."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-01T11:45:33.000-0500",
      "body": "Tags have been removed\n"
    }
  ]
}
---
In the view testing tasks the description of the title is:\
A collapsed "Tags" panel should exist if and only if tags for the artifact exist.

However there are no tags for the artifact, a collapsed "Tags" pannel appears. It displays the title "Show Tags (0)".

For instance: <http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0018>

        