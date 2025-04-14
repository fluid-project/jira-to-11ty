---json
{
  "title": "DECA-262",
  "summary": "\"Add more\" button mouse focusable even though the button has been disabled",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-05-18T10:49:10.319-0400",
  "updated": "2012-09-04T13:17:43.746-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/DECA-281/",
      "key": "DECA-281"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-262/Screenshot-Decapod PDF Exporter - Mozilla Firefox.png",
      "filename": "Screenshot-Decapod PDF Exporter - Mozilla Firefox.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-09T16:02:50.515-0400",
      "body": "Implementing <https://fluidproject.atlassian.net/browse/DECA-281#icft=DECA-281> will remove this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T12:38:14.071-0400",
      "body": "This issue is caused by FLUID-4728\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T15:54:19.944-0400",
      "body": "Due to some functions being private and a bug in Uploader, had to implement a few work arounds to get this functionality in place. Overrode the hover styling when the button is disabled, and removed forced the browseButton to be disabled after adding files to the queue.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-ui-iteration5>\n"
    }
  ]
}
---
After performing an export, the add more button becomes disabled. However, the user can still mouse focus the button by clicking on it (although the button doesn't do anything). Using the keyboard, the same element is not in the tab order and therefore not focusable by keyboard.

        