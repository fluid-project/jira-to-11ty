---json
{
  "title": "KETTLE-32",
  "summary": "Update Kettle to the latest (upcoming) version of Infusion removing autoInit",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-06-30T08:13:41.875-0400",
  "updated": "2016-05-25T18:56:49.294-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "<https://github.com/fluid-project/infusion/pull/591/files> contains a large pull request, mostly under the heading of <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249>, that significantly updates Infusion in a non-backwards compatible way. We will need to update Kettle and the rest of the GPII architecture to work with it. The primary changes to be adapted to are:\n\ni) Removal of the \"autoInit\" grades as well as the \"relay\" versions of all model-bearing grades (which are now the default)\\\nii) Removal of the \"informal\" system for contributing requests into the environment (withEnvironment) which will now need to be done by explicitly mounting and demounting the request object into the \"resolveRoot\"\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---

        