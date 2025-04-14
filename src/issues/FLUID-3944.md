---json
{
  "title": "FLUID-3944",
  "summary": "Uploader ReadMe file needs updating",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-17T14:20:38.886-0500",
  "updated": "2010-12-22T17:54:10.910-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3944/FLUID-3944-a.patch",
      "filename": "FLUID-3944-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3944/FLUID-3944-b.patch.txt",
      "filename": "FLUID-3944-b.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-22T16:58:29.699-0500",
      "body": "Here's a patch with my modifications to Uploader's README file\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T17:23:08.901-0500",
      "body": "I've reviewed Colin's edits to the Uploader Readme. This file (FLUID-3944-b.patch.txt) is a slight modification of his changes: a word here, a comma there. The only thing of any significance that I changed was to mention that if you want to limit the offerings of support by leaving out Support.js files, you can't use the concatenated file.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T17:51:06.200-0500",
      "body": "This issue was resolved for the Infusion 1.3 release at r10449.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T17:54:10.908-0500",
      "body": "Looks good.\n"
    }
  ]
}
---
The Uploader contains a ReadMe.txt file that seems quite out of date. We should update it.

        