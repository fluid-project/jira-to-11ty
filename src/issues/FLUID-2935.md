---json
{
  "title": "FLUID-2935",
  "summary": "fluid.fetchResources method does not call specified function after receiving a 404 error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jen Bourey",
  "date": "2009-06-09T13:34:26.000-0400",
  "updated": "2009-08-07T09:38:20.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-06-12T19:40:50.000-0400",
      "body": "Fixed at revision 7350\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-28T14:46:37.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-04T16:45:53.000-0400",
      "body": "Backported to 1.1.x branch at revision 7708\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-06T16:06:09.000-0400",
      "body": "backport appears identical to the trunk version\n"
    }
  ]
}
---
When the fluid.fetchResources method is used to request a page which returns a 404 error, the specified callback function is never called.

        