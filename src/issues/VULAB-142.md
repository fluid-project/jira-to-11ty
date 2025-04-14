---json
{
  "title": "VULAB-142",
  "summary": "Help Link Activation",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-01-05T16:11:04.000-0500",
  "updated": "2009-01-29T10:53:03.000-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/VULAB-149/",
      "key": "VULAB-149",
      "summary": "Fully Straighten Out Access to VULab.yorku.ca"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-142/VULAB-142.patch",
      "filename": "VULAB-142.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-05T16:33:29.000-0500",
      "body": "pushed to vulab13\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-09T15:25:13.000-0500",
      "body": "Since we currently have a help link that links to survey creation help, I am going to add survey creation help into the wiki help page and change the current help link to point to the wiki.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-12T16:10:18.000-0500",
      "body": "The changes have been completed but I am unable to upload/test them on vulab.yorku.ca. I've moved this issue to a dependency on fixing the server access/configuration.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-15T13:54:59.000-0500",
      "body": "Simple Link Change to the Navigation.\n\nI added a link for \"VULab Help\" which links to wiki help page, and \"Survey Help\" which continues to link to the system help page (which is primarily for survey creation help)\n"
    },
    {
      "author": "David Makalsky",
      "date": "2009-01-29T10:53:03.000-0500",
      "body": "patch applied\n"
    }
  ]
}
---
Create any necessary pages pages within the wiki and link to them from the web interface.

        