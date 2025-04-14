---json
{
  "title": "VULAB-176",
  "summary": "Separate projects in SVN for VULab's Web and RASCAL modules will make maintaining the source code easier.",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2009-02-18T15:19:15.000-0500",
  "updated": "2014-03-03T14:44:17.894-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "RASCAL",
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-02-20T16:48:27.000-0500",
      "body": "well done Colin. thanks 🙂\n"
    }
  ]
}
---
At the moment, we've got a slightly odd SVN setup where Web and RASCAL share the same trunk, but are branched and tagged separately. After talking with Blake and David, let's go with a directory structure like this:

vulab/\
web/\
branches/\
tags/\
0.5b/\
trunk/\
rascal/\
branches/\
tags/\
trunk/

        