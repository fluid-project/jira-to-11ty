---json
{
  "title": "FLUID-6594",
  "summary": "Migrate away from using Grunt altogether.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Tony Atkins [RtF]",
  "date": "2021-02-04T07:24:54.701-0500",
  "updated": "2024-07-22T10:35:10.714-0400",
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
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2021-02-04T07:32:48.642-0500",
      "body": "Just looking through our holdings in Gruntfile.js, our use of grunt-contrib-watch to rebuild sass files seems a small sticking point and will need some research.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2021-02-04T07:53:14.907-0500",
      "body": "Looking at the range of things we have left and do, it seems like we should be evaluating \"build tools\" like webpack for fitness for purpose, rather than cobbling together something from Grunt plugins.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-23T13:27:35.066-0400",
      "body": "closed in error\n"
    }
  ]
}
---
Now that our linting infrastructure no longer requires Grunt, we should break apart the rest of the tasks there and work to move away from Grunt altogether.  In most cases we would be migrating away from Grunt plugins for a given package to using the original package, perhaps via npx.

        