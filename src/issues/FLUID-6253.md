---json
{
  "title": "FLUID-6253",
  "summary": "Pull in dependencies via NPM",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-03-01T08:38:32.041-0500",
  "updated": "2024-07-22T10:35:25.730-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently dependencies are copied into infusion into a lib directory in src, demos, tests. It would be helpful to pull them in via NPM, instead of versioning them directly in the repo. 

It's likely that the fetched dependencies would need to be copied into the appropriate directory structure as part of an install or build step, maybe a post install task. Also the modular json dependency files for the 3rd party dependencies would need to already be in place or some how generated when the files are copied over. We would also want to add the copied files to the gitignore.

        