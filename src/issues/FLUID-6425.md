---json
{
  "title": "FLUID-6425",
  "summary": "Custom builds include all src directories",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-11-06T15:13:03.765-0500",
  "updated": "2021-05-18T15:14:00.909-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-18T15:14:00.906-0400",
      "body": "This was addressed along with changes for <https://fluidproject.atlassian.net/browse/FLUID-6594#icft=FLUID-6594>\n"
    }
  ]
}
---
Custom builds should only include the directories for which files requested come from. Currently all of the directories from src are included in custom packages, even those that are not requested. The concatenated JS file is being build correctly though.

Steps to reproduce:

1\. Run the build scrips from the command line ( grunt custom --source=true --include="uiOptions" ).\
2\. After the build has completed go to the products folder and unzip the package.\
3\. Notice that all of the directories from the src directory are included and not just the ones that contain files used in the custom build.

        