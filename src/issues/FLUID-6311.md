---json
{
  "title": "FLUID-6311",
  "summary": "Update docs for UIO for defaultLocale addition",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-27T14:46:07.954-0400",
  "updated": "2019-01-08T12:58:29.700-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299",
      "summary": "Add translated message bundles to UIO"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-04T15:32:50.119-0500",
      "body": "This is the relevant page: <https://docs.fluidproject.org/infusion/development/UserInterfaceOptionsAPI.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-01-08T12:58:25.503-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/144> ) into the project repo at f0bc9c4294ad44e1851ed242d0fa18047864608e\n"
    }
  ]
}
---
The documentation for UIO should be updated to include information about and instructions for the use of the new "defaultLocale" option.

We should also describe the available language bundles and describe the process of creating/contributing additional language bundles. There should be a note of some kind indicating that the translations may not always be possible to maintain, subject to the availability or lack thereof of native speakers of certain languages.

        