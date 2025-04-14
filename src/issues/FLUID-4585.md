---json
{
  "title": "FLUID-4585",
  "summary": "Framework not merging multi-level models properly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2012-01-30T16:43:16.102-0500",
  "updated": "2014-03-03T11:50:45.558-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4585/FLUID-4585-test.patch.txt",
      "filename": "FLUID-4585-test.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-01-30T16:44:42.197-0500",
      "body": "The attached file (FLUID-4585-test.patch.txt) provides a test illustrating the problem. I haven't yet worked on a fix.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-02-02T10:51:45.097-0500",
      "body": "Merged into project repo at 7b27d42f914d716ac281e5591abc1071de99cc07\n"
    }
  ]
}
---
The new fluid.model.mergeModel() function in Fluid.js doesn't seem to be merging models correctly when the model has more than one 'level' to it, e.g.\
model: {\
inner: {\
something: "else"\
}\
}\
Rather than merging, the inner object is replacing the defaults.

        