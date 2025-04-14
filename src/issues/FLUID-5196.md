---json
{
  "title": "FLUID-5196",
  "summary": "Typo in panel template name",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-28T15:53:01.012-0400",
  "updated": "2013-10-28T16:15:02.510-0400",
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
      "author": "Justin Obara",
      "date": "2013-10-28T16:15:02.499-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/427> ) into the project repo at 047b0656c341cc7dc9558f14c142e4653b11537a\n"
    }
  ]
}
---
The 'inputsLarger' HTML template filename starts with a lower-case 'p' which is inconsistent with the general pattern, and which causes problems on case-sensitive systems because the code uses a capital 'P'

        