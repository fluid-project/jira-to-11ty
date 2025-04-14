---json
{
  "title": "VULAB-130",
  "summary": "500 Internal Errors (in both root and /public folder)",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-16T10:46:27.000-0500",
  "updated": "2014-03-04T08:25:59.544-0500",
  "versions": [],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-130/VULAB-130.patch",
      "filename": "VULAB-130.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-12-16T11:42:50.000-0500",
      "body": "/.htaccess and /public/.htaccess were changed to add an \"Options\" directive (this was causing a failure before)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-16T11:43:48.000-0500",
      "body": "vulab11\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-16T11:47:45.000-0500",
      "body": "fixes directives in /.htaccess and /public/.htaccess to clean up the Internal 500 Errors.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-18T11:24:34.000-0500",
      "body": "2 commits were made against this issue and its resolved!\n"
    }
  ]
}
---
After I pulled a new version from the svn and tried to fire it up, I got abunch of 500 errors.

I will investigate the .htaccess files as they are probably the culprit here.

        