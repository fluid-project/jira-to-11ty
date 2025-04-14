---json
{
  "title": "FLUID-6084",
  "summary": "Update infusion docs to reflect the change on fluid.promise.map() via FLUID-5968",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2016-11-22T09:21:39.014-0500",
  "updated": "2016-11-24T11:04:26.531-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5968/",
      "key": "FLUID-5968",
      "summary": "Improve fluid.promise.map to accept functions which return promises"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5968/",
      "key": "FLUID-5968"
    }
  ],
  "attachments": [],
  "comments": []
}
---
With the merge of the pull request for FLUID-5968 (<https://github.com/fluid-project/infusion/commit/f3e5031adc95f9242d59efd8b8a7a89ecc5cf6bb>), fluid.promise.map() is improved to allow the mapper function to return a promise object. The promise API doc needs to be updated to reflect this change.

        