---json
{
  "title": "FLUID-882",
  "summary": "Empty anchors can not be tabbed to, using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2008-07-09T15:25:20.000-0400",
  "updated": "2011-01-20T11:08:36.204-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-07-09T17:38:50.000-0400",
      "body": "I've added a manual example called 'anchors' that demonstrates the issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T09:53:43.121-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-20T11:08:36.203-0500",
      "body": "I tested this issue with Firefox 2.0.0.20 and was unable to reproduce it.&#x20;\n"
    }
  ]
}
---
Using the keyboard a11y plugin to try to add tab focus to empty anchors does not work.

        