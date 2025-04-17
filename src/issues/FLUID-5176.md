---json
{
  "title": "FLUID-5176",
  "summary": "Ensure all links in docs are valid",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-08T14:10:24.244-0400",
  "updated": "2018-06-07T07:06:20.906-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "<http://wiki.fluidproject.org/display/docs/Infusion+Documentation>\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:48:12.494-0400",
      "body": "Anastasia Cheetham can this be closed now that the first set of docs are live at <http://docs.fluidproject.org/infusion/development/>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-10-02T08:40:18.297-0400",
      "body": "I have recently verified that at least some of our links do not work when the docs are viewed directly on GitHub.  See <https://fluidproject.atlassian.net/browse/FLUID-6206#icft=FLUID-6206> for details.\n\nIn cleaning this up, it would be helpful to check all links at least in the generated output.  I am proposing to do this as part of [this pull](https://github.com/fluid-project/infusion-docs/pull/129).\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2017-10-04T08:07:59.191-0400",
      "body": "I have added a link checking harness as part of the pull to migrate away from \"marked\", and also fixed all the broken links I could find.  See the pull for details.\n\n<http://github.com/fluid-project/infusion-docs/pull/129>\n"
    }
  ]
}
---
There's been a great deal of restructuring of the documentation for 1.5, as well as the addition and removal of a lot of material. As a final task before considering the docs ready, we should to a thorough double-check of every link to make sure they go to valid, appropriate pages.

        