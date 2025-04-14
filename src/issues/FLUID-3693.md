---json
{
  "title": "FLUID-3693",
  "summary": "Update the README.txt for maintenance release 1.1.3",
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
  "reporter": "Cindy Li",
  "date": "2010-08-30T11:16:37.348-0400",
  "updated": "2011-01-14T10:37:19.871-0500",
  "versions": [],
  "fixVersions": [
    "1.1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3693/FLUID-3693.patch.txt",
      "filename": "FLUID-3693.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2010-08-31T14:03:29.632-0400",
      "body": "\"FLUID-3693.patch.txt\" updates the README.txt with the changes in release 1.1.3.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-09-02T14:01:27.826-0400",
      "body": "Committed Cindy's patch to update the README.txt with a mention of the fixes in 1.1.3\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T10:30:20.022-0500",
      "body": "Reopening these issues so I can add the release component to them.&#x20;\n"
    }
  ]
}
---
Update the README.txt for the fixings on these issues:

1\. The existence of the multiple instances of infusion gives javascript error on IE due to the swfobject API. Upgrading swfobject fixes the issue (<https://fluidproject.atlassian.net/browse/FLUID-3679#icft=FLUID-3679>)\
2\. Update the license to include only the zlib/libpng license and remove any references to the LGPL (<https://fluidproject.atlassian.net/browse/FLUID-3692#icft=FLUID-3692>)

        