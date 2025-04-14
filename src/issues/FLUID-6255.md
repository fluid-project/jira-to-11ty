---json
{
  "title": "FLUID-6255",
  "summary": "provide a uio build to the dist directory",
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
  "date": "2018-03-06T14:43:28.863-0500",
  "updated": "2024-07-22T10:35:07.095-0400",
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
In talking to Ned from Pressbooks, it would be helpful to have a uio and uio-no-jquery build of infusion in the dist directory in what is published to npm. This would be a first step for our many UIO integrators to have easier access to the UIO via npm distributions. Currently to achieve this custom build, the user would have to create a custom build and commit it to their repo.

        