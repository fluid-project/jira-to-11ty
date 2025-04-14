---json
{
  "title": "VULAB-171",
  "summary": "Admin Sees All",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Blake E",
  "date": "2009-02-17T14:23:23.000-0500",
  "updated": "2014-03-03T14:44:37.408-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-171/VULAB-171.patch",
      "filename": "VULAB-171.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-17T14:23:57.000-0500",
      "body": "vulab17\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-17T14:32:23.000-0500",
      "body": "This was actually alot simplier than I thought. The super user already has priviledges to access everything, it was just a matter of making it visible. And with a 2 line change to the project functions file, its done!\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T17:12:35.000-0500",
      "body": "I reviewed this patch and committed at r6538.\n"
    }
  ]
}
---
as per Ron's request, we will have the superuser aka root user have full access to all projects - this is for helping other researchers with their projects.

        