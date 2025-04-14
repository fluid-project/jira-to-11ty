---json
{
  "title": "FLUID-4539",
  "summary": "fluid.stringTemplate seems to act greedy when expanding variables with similar names.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2011-11-25T11:07:09.303-0500",
  "updated": "2012-01-20T16:50:57.423-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4539/FLUID-4539.test.patch.txt",
      "filename": "FLUID-4539.test.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2011-11-25T11:08:11.131-0500",
      "body": "Attaching a patch with failing test.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-01-20T16:49:13.193-0500",
      "body": "Merged into the project repo at 1e7f0d8f071a69ef5d9cd75e18fc0fe3da170622 with several framework change issues:\n\n<https://fluidproject.atlassian.net/browse/FLUID-4525#icft=FLUID-4525>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4532#icft=FLUID-4532>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4537#icft=FLUID-4537>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4539#icft=FLUID-4539>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4564#icft=FLUID-4564>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4563#icft=FLUID-4563>\\\n<https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>\n"
    }
  ]
}
---
fluid.stringTemplate seems to act greedy when expanding variables with similar names.\
For example if there are 2 variables that are named %var and %vartwo, the string will be expanded using the value of %var twice even though %vartwo is provided.

        