---json
{
  "title": "FLUID-852",
  "summary": "Implement pluggable \"invitation text\" for Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-07-03T21:11:36.000-0400",
  "updated": "2009-06-03T13:43:46.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-853/",
      "key": "FLUID-853"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-852/FLUID-852.patch.txt",
      "filename": "FLUID-852.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-04T14:48:45.000-0400",
      "body": "I've attached a patch which adds a pluggable invitation text to be used if the 'display' text is empty. It includes tests and modifications to the manual test file.\n\nIt adds the invitation text, but doesn't style it - that's another JIRA.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-15T20:32:39.000-0400",
      "body": "Fixed, and merged from the branch back into trunk.\n"
    }
  ]
}
---
An empty field can contain some invitation text, such as "click here to edit." This should be pluggable, so that implementers can choose not to have any text.&#x20;

dev-iteration38

        