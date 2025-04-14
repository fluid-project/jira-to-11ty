---json
{
  "title": "FLUID-5197",
  "summary": "The grade built by the auxiliary builder for multiple composite panels per aux schema is incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-10-29T09:24:31.788-0400",
  "updated": "2013-10-29T10:39:56.740-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-29T10:39:56.683-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/428> ) into the project repo at a9eee368a74f763e6bbacb3880133f04b9c95cba\n"
    }
  ]
}
---
When the auxiliary schema contains multiple composite panels, the output by the auxiliary builder keeps overwrite or accumulating information from each composite panel rather than every composite panel having its own properties.

The cause might be that variables required for each individual composite panel are not reset at the next iteration.

        