---json
{
  "title": "FLOE-322",
  "summary": "Some text in FD tool is wrong",
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
  "date": "2015-05-01T14:52:40.178-0400",
  "updated": "2015-11-03T12:04:14.806-0500",
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
      "date": "2015-05-04T10:50:01.698-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/37> ) into the project repository at 1ecaec342993d48f30187566e806501e690a16b1\n"
    }
  ]
}
---
Some of the text in the FD tool does not match the designs: <http://wiki.fluidproject.org/download/attachments/40797428/FD%20tool%20for%20May%202015%20workshop.pdf?version=1&modificationDate=1429809849165&api=v2>

In particular:

* on opening Language screen, the button should say "continue"
* the Welcome screen text is incomplete, and should reference the "next" button and not the "start" button
* on the text size screen, we should not have labels on the +/- buttons&#x20;

        