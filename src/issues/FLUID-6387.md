---json
{
  "title": "FLUID-6387",
  "summary": "Extract distVerification Grunt tasks to a separate module",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Alan Harnum",
  "date": "2019-07-25T12:16:06.717-0400",
  "updated": "2024-07-24T13:15:51.795-0400",
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
      "date": "2024-07-24T13:15:51.661-0400",
      "body": "Grunt is no longer used for build tasks\n"
    }
  ]
}
---
The verifyDistFiles custom task and its attendant functions in Gruntfile.js are candidates to be moved into a separate Grunt module, similar to gpii-grunt-lint-all or grunt-modulefiles. This would reduce the size of Infusion's Gruntfile and make it easier to use in other contexts where the functionality is useful.

        