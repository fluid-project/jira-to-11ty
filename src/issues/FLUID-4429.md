---json
{
  "title": "FLUID-4429",
  "summary": "Demos not properly updated to new file naming scheme",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-07T12:11:37.174-0400",
  "updated": "2011-10-14T16:09:51.855-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-07T12:52:48.508-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/156> merged into project repo at 05fb4eef550f40706301f2aee414e4e7beb69fc2\n"
    }
  ]
}
---
When the demo JS files were renames, a few of the associated HTML files were not properly updated. I've identified the following demos that are currently not working:

Simple Text Inline Edit\
List Reorderer\
Renderer

Bug Parade Infusion

        