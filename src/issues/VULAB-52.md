---json
{
  "title": "VULAB-52",
  "summary": "Clean up Configuration File and Handle New Expansions",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-10-20T11:30:33.000-0400",
  "updated": "2014-03-04T09:04:13.170-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-10-20T11:30:52.000-0400",
      "body": "vulab4\n"
    },
    {
      "author": "Blake E",
      "date": "2008-10-27T11:40:44.000-0400",
      "body": "done. now there is a main include file include\\_all.php and a config.inc.php that handle all unique host contextual configuration conclusion and new framework inclusions.\n"
    }
  ]
}
---
Clean up any unused references in the configuration file, and allow it to handle various systems with easy (local, multiple hosts, etc)\
The goal is to work toward not using any phpESP configuration.

        