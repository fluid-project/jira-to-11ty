---json
{
  "title": "FLUID-807",
  "summary": "Create convenience methods for creation of Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-23T19:22:29.000-0400",
  "updated": "2008-07-16T16:06:04.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-16T16:06:04.000-0400",
      "body": "When we move to that-ism in inline edit, there will only be a single (and very convenient) method to instantiate one or many inline editors. So, this issue is now moot.\n"
    }
  ]
}
---
The Inline Edit component needs simple convenience methods for creation, such as\
createInlineEdit(id);\
as we have for Reorderer.

        