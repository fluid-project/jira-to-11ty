---json
{
  "title": "FLUID-3194",
  "summary": "screen source files for DOS line ending",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-09-22T09:36:19.000-0400",
  "updated": "2011-01-13T16:54:19.349-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T09:41:00.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-06T11:19:47.000-0400",
      "body": "Converted files to Unix line delimiters\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-06T13:10:47.000-0400",
      "body": "Hi, I checked over the source tree, and only found DOS endings remaining in some of our 3rd party libraries (chilli and FCKEditor) which we have agreed to leave unchanged.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.719-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Run source tree through an utility like dos2unix to normalize line endings for Unix.&#x20;

        