---json
{
  "title": "VULAB-175",
  "summary": "Delete Unused or Legacy Directories",
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
  "date": "2009-02-17T17:38:53.000-0500",
  "updated": "2014-03-03T14:44:20.493-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-175/VULAB-175.patch",
      "filename": "VULAB-175.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-17T17:38:57.000-0500",
      "body": "vulab17\n"
    },
    {
      "author": "Blake E",
      "date": "2009-02-17T17:57:51.000-0500",
      "body": "Deletes all of the files/folders listed above.\n\nPLEASE CHECK TO MAKE SURE IM doing it right!\n\n😃\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T17:20:17.000-0500",
      "body": "Blake and I talked in the channel and agreed to move phpESP's README and CHANGELOG files into a separate folder where they are disambiguated from the others. Otherwise, I'll commit based on this patch.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-18T17:44:29.000-0500",
      "body": "Committed as of r6541.\n"
    }
  ]
}
---
There are many unused or legacy folders that should be scheduled for deletion, I've listed them below:

/bin - was going to incorporate this folder for assets but used /js instead and left /images. now its empty.\
/services - was going to organize an api for VULab but it was depreciated in favour of other venues (frameworks)\
/tests - was going to hold tests for the /services\
/examples - legacy phpESP folder for help in skinning surveys\
CHANGELOG - legacy phpESP CHANGLOG, we can make our own now 🙂\
README - legacy phpESP README file, we're making our own now 🙂 x 2

        