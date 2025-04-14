---json
{
  "title": "FLUID-3251",
  "summary": "Renderer fails when given templates with no content in IE6, IE7, IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2009-10-07T14:00:58.000-0400",
  "updated": "2014-06-25T15:55:54.086-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3237/",
      "key": "FLUID-3237",
      "summary": "unit test failing for Renderer in IE8, IE7, IE6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:55:54.078-0400",
      "body": "We are no longer actively supporting IE6, IE7 and IE8. We will consider patches for some issues if they are offered.\n"
    }
  ]
}
---
This was previously exposed as FLUID-3237, which noticed that the test introduced for FLUID-2980 was failing since it tested a recursive invocation of the renderer by using an empty template. It was decided not to fix this for the 1.1.2 release, so a dedicated test case and fix should be supplied for 1.2 under this JIRA.

        