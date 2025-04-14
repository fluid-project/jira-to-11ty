---json
{
  "title": "VULAB-163",
  "summary": "Import CakePHP Core - Initalize Web 0.6",
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
  "date": "2009-01-29T13:26:29.000-0500",
  "updated": "2009-01-30T13:14:31.000-0500",
  "versions": [
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-163/VULAB-163.patch",
      "filename": "VULAB-163.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-01-29T14:28:17.000-0500",
      "body": "This patch adds the cake\\_1.2.1.8004.tar.gz to trunk/web/ (the latest stable release of CakePHP at the time of this post)&#x20;\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-29T14:32:13.000-0500",
      "body": "vulab15\n"
    },
    {
      "author": "David Makalsky",
      "date": "2009-01-29T14:36:27.000-0500",
      "body": "committed\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-30T11:32:34.000-0500",
      "body": "The patch did not apply properly (colin warned me about this) many directories were not created, so I need to check whether it was the patch or the svn being weird.\n\nNOTE: I've having colin do the commit to ensure it all goes in properly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-30T12:30:13.000-0500",
      "body": "I removed the old commit and imported a fresh version of the stock CakePHP distribution. Should be all ready to go. Blake, can you verify the fix?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-30T12:35:16.000-0500",
      "body": "Missing the .htaccess file at the top level. Oops.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-30T12:37:12.000-0500",
      "body": "Added .htaccess to the top-level directory.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-01-30T13:14:31.000-0500",
      "body": "thanks!!!!\n"
    }
  ]
}
---
After trunk/web has been cleared out and verified as not taking down the entire fluidproject svn, we should create a patch for the initial commit of the latest CakePHP release.

        