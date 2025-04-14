---json
{
  "title": "DECA-214",
  "summary": "Upgrade to the latest version of cherrypy",
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
  "date": "2012-01-12T12:55:59.490-0500",
  "updated": "2012-05-18T14:20:26.844-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-12T13:35:33.357-0500",
      "body": "The bulk of this work will be to update the install script to pull in the new version and make sure that it can be uninstalled easily as well.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-02-10T07:18:38.534-0500",
      "body": "Changed the install scripts to remove python-cherrypy3 from the decapod-apt.sh script and added the installation of cherrypy 3.2.2 by via wget and checkinstall to the decapod-decapod.sh script.\n\nThe changes are in my bitbucket repo\\\n<https://bitbucket.org/jobara/decapod-default-install>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:20:23.831-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The latest version of cherrypy is currently 3.2.2. We should switch to this version to get the benefits of the dynamic urls and other upgrades.

        