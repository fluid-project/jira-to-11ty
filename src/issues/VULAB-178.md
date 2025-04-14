---json
{
  "title": "VULAB-178",
  "summary": "Active Project Popups",
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
  "date": "2009-02-23T13:42:54.000-0500",
  "updated": "2014-03-03T14:44:00.198-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-178/VULAB-178.patch",
      "filename": "VULAB-178.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-23T13:46:16.000-0500",
      "body": "Its a simple fix.\n\nI did a find/replace for [http://vulab.yorku.ca](http://vulab.yorku.ca/)\n\nsimple enough. Now urls map to the root directory.\n\nie.\n\nsrc=\"/admin/...\";\n\n🙂&#x20;\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-23T14:21:07.000-0500",
      "body": "vulab17\n"
    }
  ]
}
---
After some testing with johnc we discovered there are some absolute urls still bouncing around in the "Activeproject.inc" which is the file that generates the popup for activating the project.

Simple patch, I'll have it a few.

        