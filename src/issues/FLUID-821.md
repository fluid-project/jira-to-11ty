---json
{
  "title": "FLUID-821",
  "summary": "Multiple inline edits: clicking on one editor while editing another prevents edits from being saved",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-25T16:00:10.000-0400",
  "updated": "2008-07-11T13:59:48.000-0400",
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
      "author": "Michelle D'Souza",
      "date": "2008-06-25T16:03:34.000-0400",
      "body": "This is working as expected. Changing focus is effectively doing a 'cancel' action rather then a 'save'. This is easily changed. Designers: what is the correct behaviour?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-25T19:43:45.000-0400",
      "body": "Daphne mentioned on list that the interaction at this time does not have a cancel - it should always save.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-25T19:58:11.000-0400",
      "body": "dev-iteration37\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-11T13:59:48.000-0400",
      "body": "The component now always saves, as Daphne described.\n"
    }
  ]
}
---
To reproduce:

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

1\) Click on one of the editors and change the text\
2\) Click on any other editor\
\--> The changes to the first field will not be preserved

        