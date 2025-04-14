---json
{
  "title": "FLUID-5247",
  "summary": "arrays of transformations will not produce an array if the new key contains a dot",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-01-09T16:06:30.502-0500",
  "updated": "2014-01-10T13:08:42.578-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5248/",
      "key": "FLUID-5248"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-09T16:09:23.999-0500",
      "body": "Added a pull request which contains a failing test case to demonstrate the issue.\\\n<https://github.com/fluid-project/infusion/pull/450>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-01-10T13:08:39.961-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/451> ) into the project repo at 568cb1d4091ccc68d95fb91afadfe10c7f14f457\n"
    }
  ]
}
---
When specifying a model transformation with an array of transformations, if the new key contains a dot (escaped or not) it will return an object with keys relating to positions in an array instead of an array.

e.g.

model = {a: "something"}

transformation = {b: \[{value: "a"}]}

result:\
{b:{0: {value: "something"}}}

        