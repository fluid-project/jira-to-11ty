---json
{
  "title": "FLUID-35",
  "summary": "The JSUnit test names should not be declared statically in the exposeTestFunctionNames() function.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2007-08-24T15:49:50.000-0400",
  "updated": "2011-01-28T12:25:18.961-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-12T11:10:04.000-0400",
      "body": "We are moving our tests over to jqUnit and will be getting rid of 'exposeTestFunctionNames'.\n"
    }
  ]
}
---
Currently, our exportTestFunctionNames() method returns a static array of all our test function names. The risk is that if new test functions are written but not added to this list, they will silently not be run.

This should be refactored to generate the list of test function names dynamically.

        