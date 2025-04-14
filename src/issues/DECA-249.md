---json
{
  "title": "DECA-249",
  "summary": "Errors returned by the server are not handled by the UI",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-14T14:08:18.197-0400",
  "updated": "2012-12-03T11:05:10.801-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Export"
  ],
  "environment": "FF 12 (Ubuntu 10.04)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-284/",
      "key": "DECA-284"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-249/Screenshot from 2012-11-06.png",
      "filename": "Screenshot from 2012-11-06.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-09-07T12:46:32.563-0400",
      "body": "We need to get a complete list of errors so we can create a UI to handle them.\n\n* Error should be reported to UI\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-11-05T12:36:53.802-0500",
      "body": "possible errors:\n\n1\\) image conversion or pdf generation fail (status set to \"error\")\\\n2\\) import is not an image (return 415 error)\\\n3\\) busy generating an export (return 409 error)\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-11-06T16:50:21.101-0500",
      "body": "In the case where the user uploads a single file and it is not a valid image file, error messages are split up across the UI. I think these messages should appear in the same place - namely the Export section and not in the Uploader.\n\nSee attached image.\n\nAlso, in the case of a genpdf error, there should be Help and Restart link displayed in the Export option.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-11-07T08:47:09.568-0500",
      "body": "These are actually 2 different errors. The first one is that the server rejected the file for not being an image. The second error, the one in the export, is because it attempted to create an export with no images.&#x20;\n\nAs for the links we should be able to add those in. If I'm not mistaken, the description blocks can accept markup.\n"
    }
  ]
}
---
If an error occurs on import and server, an error message is returned to the client. However, the client doesn't do anything with it.

Steps to reproduce:&#x20;

1\) Launch Decapod

2\) Attempt to import and generate a pdf from non-image files\
Notice that the progress spinner appears to continue forever; however if you look in the server logs and/or firebug you will see that a 415 error was returned.

        