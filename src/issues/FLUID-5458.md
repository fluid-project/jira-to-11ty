---json
{
  "title": "FLUID-5458",
  "summary": "update the .npmignore file ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-07-02T14:22:23.086-0400",
  "updated": "2017-02-27T15:49:18.513-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9",
    "2.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-03T07:51:34.565-0400",
      "body": "Filed two pull requests.\n\n1.5.1 fix: <https://github.com/fluid-project/infusion/pull/540>\n\n2.0 fix: <https://github.com/fluid-project/infusion/pull/539>, <https://github.com/fluid-project/infusion/pull/544>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T14:57:54.067-0400",
      "body": "Merged into 1.9.x branch at revision 4e234bd44a865b3469640d51aaf2e817e7551566\\\nand merged into trunk at revision c7b4c510325f4af134216e88ad00cbdc415bd9da\n"
    }
  ]
}
---
The npm module should only include the framework, module folder, test infrastructure (not the tests themselves), and things needed for them to run.

        