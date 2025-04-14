---json
{
  "title": "FLUID-3838",
  "summary": "No screen reader feedback that files have been added to the list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-15T14:48:27.186-0500",
  "updated": "2011-01-20T15:09:48.070-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Screen readers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:04:50.458-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T15:37:32.048-0500",
      "body": "Mike implemented the fix for this during our \"AEGIS demo sprint\" in November 2010\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T15:37:57.730-0500",
      "body": "Mike implemented a series of fixes for this issue, resolving it at r10287 of the <https://fluidproject.atlassian.net/browse/FLUID-3722#icft=FLUID-3722> Uploader branch.\n"
    }
  ]
}
---
When using the Uploader with a screen reader, there's no audible feedback after successfully adding files to the queue: no filenames, no "files added to the queue" - just indication that focus is now on the Upload button.

        