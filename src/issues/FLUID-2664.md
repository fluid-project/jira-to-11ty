---json
{
  "title": "FLUID-2664",
  "summary": "Remove TinyMCE and FCKEditor from svn and link to a CDN instead",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-12T09:28:40.000-0400",
  "updated": "2010-04-06T10:15:09.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2664/FLUID-2664.txt",
      "filename": "FLUID-2664.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2009-05-19T16:10:36.000-0400",
      "body": "This patch removes redundant tiny\\_mce editor from the repository, all dependencies are fixed by the patch(v3) for <https://fluidproject.atlassian.net/browse/FLUID-1945#icft=FLUID-1945>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-22T17:07:21.000-0400",
      "body": "Committed Yura's patch to remove Tiny\\_MCE from the repository. The only change was to remove a reference to the tiny\\_mce directory from the README.txt file\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-06T09:58:19.000-0400",
      "body": "I punted FCKEditor from the repository at r9803. This one should be good to go.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-04-06T10:15:09.000-0400",
      "body": "Doesn't look like this has caused any regressions.\n"
    }
  ]
}
---
Remove TinyMCE and FCKEditor from svn and link to a CDN instead or some other web accessible location

        