---json
{
  "title": "FLUID-615",
  "summary": "Ensure the hand cursor is stable while a portlet is being dragged",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Erin Yu",
  "reporter": "Erin Yu",
  "date": "2008-05-21T12:08:38.000-0400",
  "updated": "2008-10-31T09:58:15.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:20:40.000-0400",
      "body": "We need to think about abolishing/merging \"LayoutCustomizer\" component bugs since they should really all be reported against the base Reorderer.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T09:53:32.000-0400",
      "body": "I think more details need to be provided....\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:56:34.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:58:15.000-0400",
      "body": "This appears to have been fixed with one of the commits to the reorderer\n"
    }
  ]
}
---
iteration09\
Currently the cursor switches between an arrow and a hand multiple times while a portlet is being dragged.

        