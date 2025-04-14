---json
{
  "title": "DECA-281",
  "summary": "Design an Export interaction that restricts the user to a single file selection for exporting",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T16:05:54.575-0400",
  "updated": "2012-08-30T16:24:48.810-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-282/",
      "key": "DECA-282"
    },
    {
      "type": "Supersedes",
      "url": "/browse/DECA-262/",
      "key": "DECA-262",
      "summary": "\"Add more\" button mouse focusable even though the button has been disabled"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-281/Decapod 0.6 Export-01.png",
      "filename": "Decapod 0.6 Export-01.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-281/Decapod 0.6 Export-02.png",
      "filename": "Decapod 0.6 Export-02.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-10T15:54:32.036-0400",
      "body": "Due to some functions being private and a bug in Uploader, had to implement a few work arounds to get this functionality in place. Overrode the hover styling when the button is disabled, and removed forced the browseButton to be disabled after adding files to the queue.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-ui-iteration5>\n"
    }
  ]
}
---
Design a user interaction that restricts the user to a single file selection for exporting. When the user selects browse, the "Browse" button should disable and the "Add more" button should not even appear.

        