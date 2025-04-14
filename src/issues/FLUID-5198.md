---json
{
  "title": "FLUID-5198",
  "summary": "fluid.prefs.enactors namespace should be changed to enactor (singular) for consistency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-29T11:02:26.351-0400",
  "updated": "2013-10-29T15:35:41.760-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-10-29T11:32:26.176-0400",
      "body": "A pull request has been issued: <https://github.com/fluid-project/infusion/pull/429>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-29T15:35:41.759-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/429> ) into the project repo at 6b098f4be3d31599f971578c15dcda063d2981de\n"
    }
  ]
}
---
We renamed "fluid.prefs.panels" to "fluid.prefs.panel" i.e. we switched to singular. We should make the same change for enactors, for consistency.

        