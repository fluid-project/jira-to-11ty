---json
{
  "title": "FLUID-3237",
  "summary": "unit test failing for Renderer in IE8, IE7, IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Laurel Williams",
  "date": "2009-10-06T16:03:18.000-0400",
  "updated": "2009-10-07T15:51:34.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": "IE8, IE7, IE6 - all on XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3251/",
      "key": "FLUID-3251"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-06T16:21:36.000-0400",
      "body": "Added IE7 to the fail list\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-10-06T16:31:21.000-0400",
      "body": "Added IE6 to the mix.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-07T14:03:32.000-0400",
      "body": "It turns out this failure is caused by the test for <https://fluidproject.atlassian.net/browse/FLUID-2980#icft=FLUID-2980> also exercising for the first time in a test the behaviour of the renderer with an empty template. Given this was discovered late in the release cycle, it was decided to resolve this by adjusting the template to be non-empty and pushing back a dedicated test and fix, for new issue <https://fluidproject.atlassian.net/browse/FLUID-3251#icft=FLUID-3251>, until the 1.2 release.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-07T15:51:16.000-0400",
      "body": "I reviewed the commit and Laurel tested it\n"
    }
  ]
}
---
The renderer unit test 31.1 is failing in IE8, IE7, IE6. The test is labelled Selector Render Test module: Multiple decorator test (<https://fluidproject.atlassian.net/browse/FLUID-2980#icft=FLUID-2980>)&#x20;

        