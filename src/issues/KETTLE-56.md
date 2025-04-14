---json
{
  "title": "KETTLE-56",
  "summary": "Allow the definition of a Kettle requestHandler to accept \"options\" in addition to type/gradeNames",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-01-09T21:18:53.334-0500",
  "updated": "2020-11-04T18:20:36.428-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-01-09T21:23:29.210-0500",
      "body": "Well, anticipating the <https://fluidproject.atlassian.net/browse/FLUID-5750#icft=FLUID-5750> \"options flattening revolution\", we should simply accept \"whatever other\" options are in its definition as component options - and this is only consistent with our existing acceptance of top-level \"gradeNames\".\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-06-12T14:40:30.350-0400",
      "body": "This is in progress in the <https://fluidproject.atlassian.net/browse/KETTLE-78#icft=KETTLE-78> pull: <https://github.com/fluid-project/kettle/pull/52>\n"
    }
  ]
}
---
By analogy with other locations, e.g. the IoC testing framework's "sequence grades", we should permit free-form "options" to appear in the definition of a requestHandler - this promotes reusability in cases where parameterisation is light, allowing the entire definition to be written out inline in the handler definition.

        