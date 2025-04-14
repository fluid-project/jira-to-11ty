---json
{
  "title": "FLUID-808",
  "summary": "Create convenience methods for creation of Pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-23T19:23:47.000-0400",
  "updated": "2014-04-02T14:56:40.912-0400",
  "versions": [
    "0.8",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-902/",
      "key": "FLUID-902",
      "summary": "Port Pager to new component structure"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-2329/",
      "key": "FLUID-2329"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1426/",
      "key": "FLUID-1426"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-10-01T13:36:35.000-0400",
      "body": "dev-iteration45\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-06T09:00:02.000-0500",
      "body": "We also need convenience methods for creating the \"rendered\" version of the Pager, possibly including the required info as actual parameters, and not options, e.g.\n\nfluid.renderedPager(container, dataModel, options)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-07T15:53:10.000-0400",
      "body": "We need to create a springboard to see if we require convenience methods.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T14:56:40.893-0400",
      "body": "Pager has been redesigned, and this work is no longer necessary.\n"
    }
  ]
}
---
The Pager component needs simple convenience methods for creation, such as\
createPager(id);\
and\
createPager(json)\
as we have for Reorderer.

        