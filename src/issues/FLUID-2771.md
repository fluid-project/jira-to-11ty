---json
{
  "title": "FLUID-2771",
  "summary": "Remove unused files from trunk",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-26T14:52:30.000-0400",
  "updated": "2011-02-28T16:45:17.216-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-26T14:52:39.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-26T14:58:52.000-0400",
      "body": "removed the lib directory from the integrations-demos directory as none of the files it contains are used.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:17.213-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
Remove unused files from trunk

querystring.js and demo\_sdata\_me.json are in a lib directory under integration-demos.

They don't appear to be used by anything, and should be removed

        