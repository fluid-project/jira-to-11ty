---json
{
  "title": "FLUID-5342",
  "summary": "RendererUtilities tests are failing with \"JScript object expected\" error",
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
  "date": "2014-04-30T09:00:28.771-0400",
  "updated": "2014-05-02T10:48:08.047-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": "IE 8, 9, 10, 11\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-05-01T12:42:36.614-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/507>\\\nThis pull requires the change for <https://fluidproject.atlassian.net/browse/FLUID-5339#icft=FLUID-5339>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-02T10:48:05.567-0400",
      "body": "Merged into the project repo @ 33ef4a5150f638a481f7bc4891f0f09ce8e3d0a5\n"
    }
  ]
}
---
Currently the following tests are failing in IE 8.

FLUID-5279: Direct model sharing for renderer relay components\
FLUID-5280: The relayed new value takes precedence over the default model value\
FLUID-5282: protoComponent expansion should respect floating model references.

All fail with the message: "Died on test #1 undefined: JScript object expected"

In IE 9, 10, & 11:

FLUID-5280: The relayed new value takes precedence over the default model value

        