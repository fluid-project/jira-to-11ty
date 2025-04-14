---json
{
  "title": "DECA-257",
  "summary": "exportControls does not pass strings down to the progress and trigger components",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-16T08:30:41.786-0400",
  "updated": "2012-05-18T14:47:34.248-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-247/",
      "key": "DECA-247",
      "summary": "\"Download Link\" should be \"Download PDF\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-16T11:04:30.958-0400",
      "body": "Resolved the issue by fixing the misconfigured demands blocks. Also changed \"Export Progress\" to \"Creating PDF\".\n\nThe changes can be found in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:47:31.159-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The exportControls component does not forward on the string configuration down to the decapod.exportControls.progress and decapod.exportControls.trigger subcompoents. This was fixed for the decapod.exportControls.complete subcomponent in DECA-247

        