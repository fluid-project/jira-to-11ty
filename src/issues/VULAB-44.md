---json
{
  "title": "VULAB-44",
  "summary": "Basic Config File Cleaning/Management",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-10-10T12:05:24.000-0400",
  "updated": "2014-03-04T09:04:31.146-0500",
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
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-44/VULAB-44.patch",
      "filename": "VULAB-44.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-10-10T12:05:30.000-0400",
      "body": "vulab3\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-10T12:27:08.000-0400",
      "body": "I'm currently trying to get the error\\_reporting properly setup.\n\nphpESP legacy code has error\\_reporting completely reporting (notices included) or completely turned off (errors are suppressed)\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-10T12:31:25.000-0400",
      "body": "I found where the E\\_ALL option was triggered.\n\nit was in /admin/inclue/func.inc\n\nNow, the system will only have the error\\_reporting set in phpESP.ini.php for entire system.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-10T12:34:54.000-0400",
      "body": "please review for commit.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-10T12:35:31.000-0400",
      "body": "see attached <https://fluidproject.atlassian.net/browse/VULAB-44#icft=VULAB-44>.patch and comments/worklog for details\n"
    }
  ]
}
---
Clean up the config file as it is mostly phpESP stuff, and start putting in proper VULab configurations.

Also, program a way to manage different hosts easily (local vs. anywhere else) etc.

        