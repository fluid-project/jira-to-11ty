---json
{
  "title": "FLUID-3405",
  "summary": "Upgrade YUI compressor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-04T09:17:37.000-0500",
  "updated": "2013-04-11T17:43:18.561-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3405/FLUID-3405-1.patch.txt",
      "filename": "FLUID-3405-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T11:05:03.000-0500",
      "body": "To test this, must run the build and ensure that each js file is compressed\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-04T14:14:58.000-0500",
      "body": "The attached patch file FLUID-3405-1.patch.txt changes the version of the yui compressor used for the build. It removes the old yui compressor, adds in the new one and changes the build.properties file to point to the new yui compressor file.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-07T16:15:15.000-0500",
      "body": "Have attached a patch for this.\n"
    }
  ]
}
---
Upgrade the YUI compressor used by infusion to the latest version

        