---json
{
  "title": "FLOE-135",
  "summary": "The bold/italic/underline buttons in the metatdata demo toolbar are not in the tab order.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Dana",
  "date": "2014-01-06T12:12:26.592-0500",
  "updated": "2014-03-03T11:24:14.391-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-06T14:59:24.577-0500",
      "body": "I have explored making the B/I/U buttons part of the tab order. However, when you tab away from the editable content, the selections are dropped. This means that when you activate any of the buttons, they do not have any effect as no content is selected to change.&#x20;\n\nAs an alternative for keyboard users, we can implement the traditional keyboard short-cuts for these actions.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-06T15:18:28.270-0500",
      "body": "My above assertion was slightly mistaken. Actually you can tab away from the editable area and not lose the selection. However, if you tab into another editable field (e.g. a textfield), the selection will be dropped.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-08T10:14:00.994-0500",
      "body": "Bootstrap appears to not support focus highlighting for buttons that are in an active state. I've filed an issue on their bug tracker for this.\\\n<https://github.com/twbs/bootstrap/issues/12154>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-08T10:15:35.367-0500",
      "body": "Submitted a pull request that adds the controls into the tab order and adds keyboard shortcuts as well.\\\n<https://github.com/fluid-project/metadata/pull/17>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-01-21T14:11:27.164-0500",
      "body": "Merged into the project repo @ 1f7a5d207a5a6ab5993c71db2b4754d36ddfb1a6\n"
    }
  ]
}
---
Tabbing through the metadata demo skips over the bold/italic/underline buttons in the toolbar.  There is no way to access these buttons with the keyboard.

        