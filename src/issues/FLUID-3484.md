---json
{
  "title": "FLUID-3484",
  "summary": "UILink members do not support resolution through message bundle via UIMessage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-01-22T18:47:42.000-0500",
  "updated": "2014-03-03T14:14:35.997-0500",
  "versions": [
    "1.1.2",
    "1.3.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-01-22T19:27:42.000-0500",
      "body": "Implemented at revision 9112, tests updated\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:55:31.759-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
A remaining missing piece of functionality from the Java days is the capability to provide UIMessage objects as the "linktext" and "target" members of the UILink component. This allows both the URL itself as well as the direct link text to be sourced from a message bundle as with plain UIOutput components. This functionality is urgently needed for the current I18N work in Fluid Engage.

        