---json
{
  "title": "ENGAGE-510",
  "summary": "After adding a comment, when tapping back, goes back to comment entry screen",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2010-03-10T15:39:53.000-0500",
  "updated": "2017-12-22T09:44:17.583-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Comments"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:17.581-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
To replicate:

* Go to an artifact view
* Add a comment. Tap 'Submit'.
* When back at artifact view, tap 'Back'.
* Screen goes to comment entry.

Intended behavior:

'Submit' and 'cancel' on comment entry should behave like a 'back'. Specifically, text entry screens should not belong to the history of visited screens. In no case should a user be able to tap 'Back' and get to a comment entry screen.

        