---json
{
  "title": "FLUID-2769",
  "summary": "Create a script to check for and correct DOS line endings in our code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-05-26T12:14:25.000-0400",
  "updated": "2011-05-17T11:23:11.091-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
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
      "date": "2010-03-30T14:00:35.000-0400",
      "body": "This should be part of a more robust post-commit hook for SVN (or Mercurial). It should include:\n\n* Line endings\n* File encoding (UTF-8)\n* Trimming whitespace\n* Tabs to spaces?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:23:11.090-0400",
      "body": "git can automatically handle this\n"
    }
  ]
}
---
Create a script to check for and correct DOS line endings in our code

Currently we have to go file by file in a text editor that will show this line ending.

        