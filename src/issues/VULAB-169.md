---json
{
  "title": "VULAB-169",
  "summary": "Create Basic INSTALL.txt",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-02-17T13:26:23.000-0500",
  "updated": "2014-03-03T14:44:40.301-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-169/INSTALL-v1.txt",
      "filename": "INSTALL-v1.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-169/INSTALL-v2.txt",
      "filename": "INSTALL-v2.txt"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-17T13:35:30.000-0500",
      "body": "This patch svn add's the INSTALL.txt to the main home dir of the site, and provides a installation guide for new users.\n\nEDIT:\\\n**oops** I deleted patch, but colin's gunna add the badboy to svn. I opt'd to toss around list. We can do both (patch AND list) and patch any comments generated from list.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-18T13:39:57.000-0500",
      "body": "version 1 of the install.txt - although its hard to see how good it is without following the steps, feel free to give it a read and post comments on the list.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-18T15:08:48.000-0500",
      "body": "Version 2 - with some tips from jess on the list I've explained the \"home directory\" to the installers and added full paths to files referenced within INSTALL.txt\n\nAlthough this isn't finished and I would like more comments, I'm going to hold off on any more changes until the svn is up to date (we re restructuring it atm)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T16:55:27.000-0500",
      "body": "I've committed the INSTALL-2.txt file to the root directory of VULab Web, as of r6536.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T16:55:42.000-0500",
      "body": "Blake, can you double check that this is correct?\n"
    }
  ]
}
---
The bare bones "how-to" get VULab Web up and running on a server with limited but reasonable (ftp, editing files) technical experience.

        