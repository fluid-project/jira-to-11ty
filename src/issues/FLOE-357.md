---json
{
  "title": "FLOE-357",
  "summary": "In Safari on desktop, disabled language scroll arrow still have 'active' styling",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-28T10:18:19.676-0400",
  "updated": "2015-11-03T12:42:37.188-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-04T14:26:54.854-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/85> ) into the project repo at 984ac9072161f4d6c2f3d8d85cc2e3e80adb5ca2\n"
    }
  ]
}
---
In Safari on desktop:\
On the opening language screen, when the language list is scrolled to one end or the other, the arrow button is disabled and grey. It correctly has no hover style, but if you click on it, there is 'active' styling applied while the mouse button is pressed: the button colours invert and a wide border is applied.

        