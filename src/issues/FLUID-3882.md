---json
{
  "title": "FLUID-3882",
  "summary": "Renderer needs to be able to handle more than one expander in the component tree.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "y z",
  "date": "2010-12-07T15:43:25.604-0500",
  "updated": "2010-12-07T16:22:21.529-0500",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3882/FLUID-3882.patch.txt",
      "filename": "FLUID-3882.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-12-07T15:45:07.108-0500",
      "body": "This patch modifies renderer utilities to take into consideration a case where the tree contains more than one expander in the expander array.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-07T15:47:24.789-0500",
      "body": "By order of the King, I declare this issue \" Bug Parade Infusion 1.3 \"\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-07T16:21:55.140-0500",
      "body": "Fixed at revision 10349\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-12-07T16:22:21.524-0500",
      "body": "Reviewed for release, patch is sound and minimal\n"
    }
  ]
}
---
Currently the renderer only handles trees with a single expander inside, this patch upgrades it to be able to handle an expander array with more than one expander.

        