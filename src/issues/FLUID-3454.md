---json
{
  "title": "FLUID-3454",
  "summary": "uuid code block could move in postProcessor.php",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T15:41:58.000-0500",
  "updated": "2013-04-11T17:43:18.332-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3454/FLUID-3454-1.patch.txt",
      "filename": "FLUID-3454-1.patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3454/FLUID-3454-2.patch.txt",
      "filename": "FLUID-3454-2.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-02-10T15:34:40.000-0500",
      "body": "I have attached two patches which will address this issue.&#x20;\n\nPatch 1 is a patch containing the updates required to move the UUID code in the current postProcessor.php.\n\nPatch 2 is a patch containing the updates in postProcessor for both this jira and <https://fluidproject.atlassian.net/browse/FLUID-3455#icft=FLUID-3455>, since the code overlaps and will cause a conflict if the changes are added separately.\n"
    }
  ]
}
---
The code block where the Uuid is calculated could be moved into the block of code related to building the zip file. It is not needed if the file is cached.

        