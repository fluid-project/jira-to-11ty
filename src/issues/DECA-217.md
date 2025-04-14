---json
{
  "title": "DECA-217",
  "summary": "Remove the camera capture and calibration workflow",
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
  "reporter": "Justin Obara",
  "date": "2012-01-12T13:22:31.627-0500",
  "updated": "2012-02-10T13:59:55.529-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Calibration",
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-15T20:29:45.308-0500",
      "body": "I've removed the camera capture and calibration workflow from the Decapod-server and Decapod-ui repos. The work is currently in my bitbucket repos and needs to be pulled into the master repo.\n\n<https://bitbucket.org/jobara/decapod-server>\\\n<https://bitbucket.org/jobara/decapod-ui>\n\n\\*Note that the install scripts haven't yet been updated to remove any, now, unneeded dependencies. This will be done later when the list of dependencies have been established and the install script is updated.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-16T11:45:53.712-0500",
      "body": "pushed up to the main googlecode repo\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-01-31T11:18:46.902-0500",
      "body": "Re-opened because there are images that still need to be removed.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-02-10T13:59:55.527-0500",
      "body": "Removed last offending images.\n"
    }
  ]
}
---
For 0.5 there is no concept of camera capture, instead straight file import is used. Also these features will be updated in future releases. Due all of these changes we should probably just remove the code for now and resurrect if needed at a later date.

        