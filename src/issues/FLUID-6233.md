---json
{
  "title": "FLUID-6233",
  "summary": "The test delays for fluid.debounce are too short",
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
  "date": "2017-12-11T09:47:16.698-0500",
  "updated": "2018-06-07T06:56:25.414-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The test delays for fluid.debounce should be in units of hundreds of ms. 

<https://github.com/fluid-project/infusion/blob/master/tests/framework-tests/core/js/FluidJSTests.js#L316>

See conversation from <https://botbot.me/freenode/fluid-work/2017-12-11/?msg=94516687&page=1>

        