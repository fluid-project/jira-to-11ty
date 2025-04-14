---json
{
  "title": "FLUID-87",
  "summary": "Document how to extend the Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2007-11-01T15:33:03.000-0400",
  "updated": "2008-04-08T15:13:57.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-11-27T14:14:27.000-0500",
      "body": "The documentation I'm working on will cover:\n\n1\\. How to write your own orderableFinder function, describing the trade-offs of various approaches.\\\n2\\. How to write your own oderableCallback function, which posts the order of elements to the server.\n\nI've been developing sample code for this tutorial, available at:&#x20;\n\n<https://source.fluidproject.org/svn/fluid/components/trunk/src/webapp/component-templates/test/markupExamples/reorderer/concrete/scheduler/>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2007-11-28T17:31:40.000-0500",
      "body": "I've committed sample code which will be included in 0.1. The tutorial itself will be written post-0.1.\n"
    }
  ]
}
---

        