---json
{
  "title": "FLUID-6703",
  "summary": "id materialisation should have value from model take precedence",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-12-13T10:44:31.747-0500",
  "updated": "2021-12-16T14:38:20.541-0500",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-12-16T14:38:14.921-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1067> ) into the project repo at 0b24a595780b19f7367eb42e254964e77555e1a0\n"
    }
  ]
}
---
The current id materialisation rules give precedence to a value taken from the markup. This makes it impossible to override a value held in a template from the model. Instead any value taken from the model should take precedence.

        