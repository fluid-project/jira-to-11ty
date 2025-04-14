---json
{
  "title": "SJRK-186",
  "summary": "Placeholder text doesn't respond to UIO contrast themes",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-17T23:27:49.951-0500",
  "updated": "2020-07-30T16:25:11.647-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6525/",
      "key": "FLUID-6525"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-07-30T16:25:11.644-0400",
      "body": "This was fixed in <https://fluidproject.atlassian.net/browse/FLUID-6525#icft=FLUID-6525>\n"
    }
  ]
}
---
The placeholder text in the text fields does not respond to changes in the UIO contrast themes. It is unclear whether it should, and if so then how.

To reproduce:

* Begin a new story
* Add any block
* Click "+ show preferences" at the top of the page
* Click one or more of the different contrast themes in the "contrast" panel of UIO

Expect:

* Unsure, perhaps that the placeholder text colour would change along with the rest of the page

Actual:

* The whole page changes and the placeholder text does not

        