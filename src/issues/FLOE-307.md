---json
{
  "title": "FLOE-307",
  "summary": "Add a tooltip to the keyboardInput component",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Simon Bates",
  "date": "2015-04-23T10:32:22.701-0400",
  "updated": "2015-11-03T11:57:37.551-0500",
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
      "author": "Simon Bates",
      "date": "2015-04-30T11:20:28.283-0400",
      "body": "Pull request: <https://github.com/fluid-project/first-discovery/pull/35>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-04T15:43:06.369-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/35> ) into the project repo at a5fa02204241f290ceedbf1140803747c8f2f9d5\n"
    }
  ]
}
---
Add a tooltip to the keyboardInput component used on the First Discovery keyboard panel.

The tooltip should read "Select to begin typing" and is shown on the wireframe:

<https://www.dropbox.com/s/4nxvybp4d6rcb03/FD%20tool%20for%20May%202015%20workshop.pdf?dl=0>

Use the attachTooltip grade.

The tooltip should:

* open on mouseover if the input does not have focus (if the input has focus, it does not open)
* close on mouseleave
* not open on focusin
* close on focusin, if it is open

        