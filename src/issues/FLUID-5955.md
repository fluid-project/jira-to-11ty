---json
{
  "title": "FLUID-5955",
  "summary": "Valuemapper gives misleading error message on wrong syntax",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2016-09-13T03:43:51.116-0400",
  "updated": "2016-09-14T10:31:57.816-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-14T10:31:53.697-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/748> ) into the project repo at a6657da8c67fbb4d378de271b752dea063089d92\n"
    }
  ]
}
---
There is a pretty bad blunder in the valuemapper implementation. If a valuemapper transform is declared, which is missing the mandatory "match" directive, it will output an error message saying that a "matches" directive needs to be supplied (note the match\*es\*).

        