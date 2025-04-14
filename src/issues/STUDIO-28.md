---json
{
  "title": "STUDIO-28",
  "summary": "Document how to install and configure the Studios site",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2011-12-12T10:30:07.566-0500",
  "updated": "2012-01-20T17:30:16.873-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-14T12:02:10.819-0500",
      "body": "One thing that must be done to configure Wordpress: Set the thumbnail size.\n\n1\\) In the Wordpress Admin interface, choose Settings -> Media. \\\n2\\) Set the default thumbnail size to W: 240 and H: 160\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-14T12:34:25.605-0500",
      "body": "Configure the \"Reading\" settings to ensure the \"Blog page shows at most\" is set large (we're testing with 100). If there are more than this number of entries, the main page will have a link to \"Older posts\" near the bottom.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-16T13:59:07.103-0500",
      "body": "Merged into project repo at f3f34e048d8994f2ed162f6f11c8c0935febfe94\n"
    }
  ]
}
---
This documentation should include:

* basic install instructions
* everything we've done through the admin interface

        