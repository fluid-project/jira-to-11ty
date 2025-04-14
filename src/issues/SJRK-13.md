---json
{
  "title": "SJRK-13",
  "summary": "onchange not always firing for select element",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2017-10-20T17:17:11.930-0400",
  "updated": "2017-10-31T15:09:15.629-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2017-10-23T15:07:18.251-0400",
      "body": "Pull request created with work-around solution to this issue:\n\n<https://github.com/BlueSlug/sjrk-storyTelling/pull/3>\n"
    }
  ]
}
---
In the storytelling tool, the language select element isn't always firing the change event when the DOM has indeed changed.

How to reproduce the issue:

* type a language into the text input field, the select element's selectedIndex will change to index 4 and will not fire the change event
* choose a new language from the select element, the selectedIndex will change to this new option, but the change event will still not fire.
* choose a second language from the select element, and the event **will** fire

There are also tests to illustrate this behaviour

        