---json
{
  "title": "VULAB-186",
  "summary": "\"Delete Project\" Popup Absolute Links",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-24T16:46:27.000-0500",
  "updated": "2009-03-30T13:39:12.000-0400",
  "versions": [
    "0.5"
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-186/VULAB-186.patch",
      "filename": "VULAB-186.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-24T16:47:22.000-0500",
      "body": "vulab17\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-24T16:51:13.000-0500",
      "body": "this patch simply replaces all of the absolute references to relative to root.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-03-30T13:39:12.000-0400",
      "body": "patch not applied to trunk, I'm re-opening.\n"
    }
  ]
}
---
Much like the activate project popup, the Delete project popup's html uses some absolute links (to vulab.yorku.ca)

Another simple fix.

        