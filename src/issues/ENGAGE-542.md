---json
{
  "title": "ENGAGE-542",
  "summary": "Tabindex is not properly set to all of the anchors used in the cabinet handles.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-04-08T10:39:15.000-0400",
  "updated": "2014-03-03T13:43:29.056-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-08T10:45:37.000-0400",
      "body": "Now setting tabindex to -1 when making sure that there are anchors in the handles.\n"
    }
  ]
}
---
The anchors aren't correctly being pulled out of the tab order. They should be set to -1 because they are only there for voiceover users to know that the headers are actionable.&#x20;

        