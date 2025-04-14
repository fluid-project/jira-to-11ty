---json
{
  "title": "DECA-247",
  "summary": "\"Download Link\" should be \"Download PDF\"",
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
  "date": "2012-05-14T13:59:55.953-0400",
  "updated": "2012-05-18T14:47:00.519-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-257/",
      "key": "DECA-257"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-247/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-14T14:00:42.387-0400",
      "body": "Screenshot.png shows the download link displaying \"Download Link\" instead of \"Download PDF\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-14T14:52:01.766-0400",
      "body": "Fixed the issue by changing the string for the download link to be \"Download PDF\" also fixed a bug that had prevented the string from being passed all the way down. The changes are in my bitbucket repo:\n\n<https://bitbucket.org/jobara/decapod-ui-05release>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:46:56.718-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The string for the download link should be "Download PDF"

Steps to reproduce:

1\) Launch Decapod

2\) Add images to import

3\) Trigger "Start Export" from any of the export types

4\) After the export has completed notice that the download link says "Download Link" instead of "Download PDF"

        