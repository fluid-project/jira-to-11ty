---json
{
  "title": "ENGAGE-250",
  "summary": "Ensure all Engage-related components are correctly named and namespaced",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T16:25:28.000-0500",
  "updated": "2017-12-22T09:44:16.306-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-250/ENGAGE-250core.patch",
      "filename": "ENGAGE-250core.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-250/ENGAGE-250coreB.patch",
      "filename": "ENGAGE-250coreB.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-250/ENGAGE-250kettle.patch",
      "filename": "ENGAGE-250kettle.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-250/ENGAGE-250kettleB.patch",
      "filename": "ENGAGE-250kettleB.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:35:37.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-24T13:15:32.000-0500",
      "body": "The following components still need to be updated to use the engage name space\n\nBrowse,\\\nCabinet, \\\nCatalogue,\\\nNavigationList\n\nThe following services still need to be updated to use the engage name space\n\nartifactView,\\\nbrowse,\\\nbrowseCatalogue,\\\ncatalogue,\\\ncodeEntry,\\\nexhibitionAbout,\\\nexhibitionBrowse (this is partially done),\\\nexhibitionView,\\\ncollectionCommon,\\\ncollectOperations,\\\nmyCollectionService\n"
    },
    {
      "author": "y z",
      "date": "2010-03-17T10:46:44.000-0400",
      "body": "This patch has everything up to date except for the names for catalogue and catalogue browse.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:16.304-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Many of the Engage components and data feeds could be improved in terms of naming and namespacing. For example, the Artifact View component lives in the top-level fluid namespace and is called "artifact." Other components and data feeds should similar be reviewed and improved.

        