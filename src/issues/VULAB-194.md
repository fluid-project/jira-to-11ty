---json
{
  "title": "VULAB-194",
  "summary": "Fix URL for Rascal FIles",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-04-21T13:57:30.000-0400",
  "updated": "2009-04-21T14:14:57.000-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-194/VULAB-194.patch",
      "filename": "VULAB-194.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-04-21T14:00:57.000-0400",
      "body": "Read the description on how this url was fixed to be \"semi-dynamic\"\n"
    }
  ]
}
---
So given the way that phpESP controls its results pages, I have opt'd to code a semi-static url.

It takes the $\_SERVER\['HTTP\_HOST'] of the current site, and then adds a subdomain and a folder.

example:\
HTTP\_HOST = vulab.yorku.ca\
rascal url = rascal.vulab.yorku.ca/files/

        