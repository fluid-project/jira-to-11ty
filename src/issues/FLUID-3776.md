---json
{
  "title": "FLUID-3776",
  "summary": "Check licenses and copyrights",
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
  "reporter": "Justin Obara",
  "date": "2010-10-04T15:48:10.061-0400",
  "updated": "2011-01-14T13:27:46.131-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3776/FLUID-3776-patch.txt",
      "filename": "FLUID-3776-patch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3776/FLUID-3776-v2.patch.txt",
      "filename": "FLUID-3776-v2.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-10T13:50:23.178-0500",
      "body": "FLUID-3776-patch.txt updates the copyrights&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-12-10T15:15:08.967-0500",
      "body": "FLUID-3776-v2.patch.txt updates the previous patch with a change to the way Antranig's copyright is displayed\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-11T13:25:18.388-0500",
      "body": "Committed at revision 10390\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T13:23:40.287-0500",
      "body": "Reopening these issues to add the releasecomponent.&#x20;\n"
    }
  ]
}
---
Ensure all javascript files have a license and copyright. Copyright should cover only the years since the code file was created and should include only institutions who have made a substantive contribution to the code. Also make sure third party code is compatibly licensed and a license file is included in the same directory as the code.

<http://wiki.fluidproject.org/display/fluid/Fluid+Licensing>

        