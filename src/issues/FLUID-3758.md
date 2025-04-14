---json
{
  "title": "FLUID-3758",
  "summary": "Expose \"computePageLimit\" calculation function for use by clients",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2010-09-26T17:12:17.958-0400",
  "updated": "2014-03-03T13:41:11.911-0500",
  "versions": [
    "1.2.1",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-09-26T17:19:11.772-0400",
      "body": "Fixed at revision 10048\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:45:44.471-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
As well as being used in several places within the component, this utility is also generally useful for the component clients. It was once requested by athena7 and is now used within CollectionSpace.

        