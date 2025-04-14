---json
{
  "title": "VULAB-167",
  "summary": "Create/Commit Bootstrap",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-12T11:50:59.000-0500",
  "updated": "2014-03-03T14:44:45.303-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-167/VULAB-167.patch",
      "filename": "VULAB-167.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-12T11:51:10.000-0500",
      "body": "vulab16\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-17T13:18:24.000-0500",
      "body": "patch to add database.sql to the main home dir.\\\nthis is the basic database schema with no data imported (the initial signup will create required data)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T16:51:58.000-0500",
      "body": "I've reviewed Blake's patch and it looks good. Committed at r6535.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T16:52:56.000-0500",
      "body": "Blake, I've committed your patch. Take a look and make sure it's ok.\n"
    }
  ]
}
---
Create a clean database that can be imported into the database to get a user off to the races 🙂

        