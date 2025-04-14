---json
{
  "title": "DECA-259",
  "summary": "Update the install script for Decapod 0.5",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-16T08:58:06.345-0400",
  "updated": "2012-06-04T09:19:22.880-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Installation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-16T09:01:51.384-0400",
      "body": "Server Dependencies:\\\n\\================\n\n* Python 2.6.5\n* Cherrypy 3.2.2\n* ImageMagick 6.5.7-8 (convert in pdf.py line 49)\n\nUI Dependenceis:\n\n\\=============\n\nAll self contained in the source code\n\ngenpdf Dependencies:\\\n\\=================\n\n???\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T16:20:30.166-0400",
      "body": "Removed photo from the installation. We will have to gather a comprehensive list of dependencies for 0.6, in the meantime it's hard to tell what is/n't needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-22T13:32:30.423-0400",
      "body": "Need to update to the latest version of genpdf and and it's dependencies\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-06-04T09:19:22.834-0400",
      "body": "The install scripts have been updated. Removed many unused dependencies and added in a a few new ones.&#x20;\n"
    }
  ]
}
---
The install script should be updated for the 0.5 release.

With the removal of the capture work flow, there should be a dependencies that are no longer needed. Also with the upgrades to genpdf and the server, it is likely that other dependencies have changed as well.

        