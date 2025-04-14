---json
{
  "title": "DECA-246",
  "summary": "The icon on the \"Start Export\" button appears the same in both the enabled and disabled states",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2012-05-14T13:53:20.003-0400",
  "updated": "2012-05-23T12:21:48.718-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-246/Screenshot-disabled.png",
      "filename": "Screenshot-disabled.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-246/Screenshot-enabled.png",
      "filename": "Screenshot-enabled.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-14T14:02:38.164-0400",
      "body": "Screenshot-disabled.png shows the \"Start Export\" button while disabled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-14T14:03:02.615-0400",
      "body": "Screenshot-enabled.png shows the \"Start Export\" button while enabled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-23T12:19:14.162-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Steps to reproduce:

1\) Launch Decapod

2\) Expand any of the export types without adding any images to import\
Notice the icon in the disabled "Start Export" button

3\) Add images to import\
Notice that the icon in the "Start Export" button appears as it did in the disabled state

        