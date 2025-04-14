---json
{
  "title": "VULAB-162",
  "summary": "Clear out vulab/trunk/web in prep. for CakePHP",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Blake E",
  "date": "2009-01-29T13:16:43.000-0500",
  "updated": "2009-01-29T14:24:06.000-0500",
  "versions": [
    "0.5B",
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-162/VULAB-162.patch",
      "filename": "VULAB-162.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-29T13:19:15.000-0500",
      "body": "patch that should clear out the trunk/web.\n\nPLEASE REVIEW (I don't wanna break anything)\n\nNote: the trunk/web has been tagged AND branched by dmakalsky.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-29T14:19:31.000-0500",
      "body": "Blake pointed out that some directories and files didn't get removed. I'll fix this.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-29T14:22:52.000-0500",
      "body": "I've deleted the last remaining directories. A blank slate for Blake to rock the framework with.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-29T14:23:49.000-0500",
      "body": "vulab15\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-29T14:24:06.000-0500",
      "body": "huzzah! CakePHP here I come!\n"
    }
  ]
}
---
Clear out the contents of the trunk/web and so we can then import the CakePHP

(I am choosing to do delete and import in 2 different patches so we can be sure of whats happening)

        