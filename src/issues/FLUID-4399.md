---json
{
  "title": "FLUID-4399",
  "summary": "Corruption of options material caused by non-recognition of \"Array\" type after passage through iframe boundary",
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
  "reporter": "Antranig Basman",
  "date": "2011-08-12T02:36:07.752-0400",
  "updated": "2011-08-25T14:49:04.582-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T10:35:09.770-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/137> merged into project repo at 4018514d2d1fa9d235178ff8ea89d4a3c10f2466\n"
    }
  ]
}
---
Through accident, one remaining call to "instanceof" remains in the core framework - as part of options merging, the following test is made to determine the type of a fresh container constructed whilst copying options:

(Fluid.js line 1186)\
target\[name] = thisTarget = thisSource instanceof Array ? \[] : {};

If the options material has arrived from a different iframe, the "Array" prototype type will be unrecognisable, leading to incorrect selection of {} as the new base type. This corrupts options during this process (first observed in UIOptions through corruption of an "args" entry for a boiled event). This should be replaced by standard framework primitive fluid.freshContainer which is used elsewhere in the file.

        