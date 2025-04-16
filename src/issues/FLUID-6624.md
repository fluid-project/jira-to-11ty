---json
{
  "title": "FLUID-6624",
  "summary": "Write migration docs for Infusion 2.0 to Infusion 3.0",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-05-19T14:50:11.886-0400",
  "updated": "2024-07-22T10:35:08.699-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6624/merges.log",
      "filename": "merges.log"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-05-19T16:14:07.110-0400",
      "body": "merges.log contains a log of the merge commits between the Infusion 2.0 tag and HEAD at time of generation. This can be generated using the following git command:\\\n \\\n`git log v2.0.0..HEAD --merges --first-parent`\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-05-19T16:15:10.199-0400",
      "body": "Antranig Basman is there anything in particular that needs to be documented or deprecated?\n"
    }
  ]
}
---
In preparation for the Infusion 3.0 release, we need to write docs for the API Changes between Infusion 2.0 and Infusion 3.0. These have already been started, as some docs were written alongside their respective code. 

<https://docs.fluidproject.org/infusion/development/apichangesfrom2_0to3_0>

Deprecated code should also be indicated as needed.

        