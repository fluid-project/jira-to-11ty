---json
{
  "title": "SJRK-280",
  "summary": "Show labels for block input fields",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Gregor Moss",
  "date": "2019-09-09T13:08:43.903-0400",
  "updated": "2019-09-12T19:21:36.695-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Placeholder text is the only label for block inputs. Once the user starts typing, it disappears and the user is left to guess at which field it is.

At a minimum, make the labels visible (they are already in the markup).

An interesting solution would be to have the placeholder text transition into a label above each field once it’s been filled in. Lisa found this neat trick: <https://medium.com/@eugeniolujambio/accessible-css-only-floating-labels-74bf9173bc5f>

        