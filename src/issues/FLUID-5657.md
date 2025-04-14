---json
{
  "title": "FLUID-5657",
  "summary": "Add a transform \"fluid.transforms.indexOf\" to return the index of an element in an array",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-04-24T10:11:40.537-0400",
  "updated": "2015-04-28T11:30:35.214-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-04-24T12:49:17.511-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/594> has been merged into the project master branch @ de1165232ea859a0d4724f2ce6d0c9382fa46b7f\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-04-24T16:45:50.859-0400",
      "body": "Issued another pull request (<https://github.com/fluid-project/infusion/pull/595>) to add \"fluid.transforms.dereference\", the invertible partner of \"fluid.transforms.indexOf\".\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-04-28T11:30:33.065-0400",
      "body": "The pull request #595 has been merged @ f7fbaea8e95c4abb78eed8fcabc9296ba823655a\n"
    }
  ]
}
---
The new transform "fluid.transforms.indexOf" returns the index of an element in an array. Also add another transform "fluid.transforms.dereference" to make "indexOf" invertible.

        