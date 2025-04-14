---json
{
  "title": "FLUID-6630",
  "summary": "Prefs framework faultily indexes aux builder itself as an aux schema",
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
  "reporter": "Antranig Basman",
  "date": "2021-06-23T09:00:37.570-0400",
  "updated": "2024-07-17T08:08:47.973-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-23T11:12:24.183-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1053> ) into the project repo at 3c9d2bac515d2570befc24dbf6f66060b19308fc\n"
    }
  ]
}
---
During implementation of FLUID-6629, a fault was found where the auxBuilder had the grade of "fluid.uiOptions.auxSchema" applied to it, meaning that the entire auxBuilder got indexed in its own defaults index. This was not a problem until the <https://fluidproject.atlassian.net/browse/FLUID-6420#icft=FLUID-6420> work which managed to override its own "auxiliarySchema" in the right order by accident through overriding it with itself, leading to corruption in the defaults cache, but it would be wise to backport this fix.

Note that for FLUID-6629 there was no straightforward way to ensure the overriding by dynamic grades deferred to inline material rather than the other way round so the pipeline was rewritten in an imperative way. This is another use case for <https://fluidproject.atlassian.net/browse/FLUID-6590#icft=FLUID-6590> local mergePolicies.

In addition some dead test case code was discovered at <https://github.com/fluid-project/infusion/blob/main/tests/framework-tests/preferences/js/AuxBuilderTests.js#L446-L506>

        