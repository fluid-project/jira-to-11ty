---json
{
  "title": "KETTLE-24",
  "summary": "Update reference to the promises / when library",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2014-04-09T07:57:00.080-0400",
  "updated": "2015-08-26T20:44:31.933-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-26T20:44:31.917-0400",
      "body": "when.js was removed from Kettle trunk in favour of Infusion's \"micro-promises\" as part of the general cleanup covered under GPII-434, at revision fc5cbca280473bd2eba0c4b69974370c249088d1 on Nov 26th 2014\n"
    }
  ]
}
---
Currently the when library referred to in package.json is quite old (1.8.1) and significant improvements in functionality, apis and documentation has been made to the current version (3.1.0). We should update the version of the promise library used

        