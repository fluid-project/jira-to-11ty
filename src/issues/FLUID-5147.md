---json
{
  "title": "FLUID-5147",
  "summary": "Update 'grades' docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Anastasia Cheetham",
  "date": "2013-09-23T16:55:27.979-0400",
  "updated": "2014-04-24T16:43:20.178-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-03-27T14:43:34.860-0400",
      "body": "Antranig Basman Please check these docs when you get a chance and close this issue if appropriate. Thanks!\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-24T16:43:20.170-0400",
      "body": "These pages are now reasonably complete in the wiki\n"
    }
  ]
}
---
The component grades docs at\
<http://wiki.fluidproject.org/display/docs/Component+Grades>\
need to be updated to include information about

* defining custom grades
* combining multiple grades, grade merging

plus

* dynamic grades, both supplied via direct options as well as those resolved via an IoC reference in the "gradeNames" list - explain the limitations on this latter process and how it must be used carefully

        