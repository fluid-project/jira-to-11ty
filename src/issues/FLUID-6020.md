---json
{
  "title": "FLUID-6020",
  "summary": "The contrast options should be grouped in a fieldset with a legend",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-11-02T10:22:34.970-0400",
  "updated": "2016-11-03T09:35:31.080-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-11-03T08:46:00.296-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/776>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-03T09:35:27.278-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/776> ) into project-repo at d62aafa6f9f91e4e362632287ab2a8f4d147a726\n"
    }
  ]
}
---
The radio buttons used for the contrast adjuster should be grouped using a fieldset and have a legend element to provide a label to group all of the options. Currently an AT will read back the label of each radio button, e.g. "Black on White" but that description isn't really enough to convey what all of the options are doing.&#x20;

        