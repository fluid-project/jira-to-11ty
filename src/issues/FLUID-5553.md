---json
{
  "title": "FLUID-5553",
  "summary": "Normalize CSS not included in built bundle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-11-11T11:55:36.191-0500",
  "updated": "2015-04-23T13:34:40.519-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-11-11T13:14:32.606-0500",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/567>\n"
    }
  ]
}
---
The removal of FSS added a dependency on normalize, but the library is not being included by the grunt process.&#x20;

        