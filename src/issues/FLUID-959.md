---json
{
  "title": "FLUID-959",
  "summary": "Inline edit unit tests not working in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-21T16:39:56.000-0400",
  "updated": "2008-07-29T15:53:59.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE6, IE7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-950/",
      "key": "FLUID-950",
      "summary": "Inline edit not working in IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-28T09:24:30.000-0400",
      "body": "Only failing test 5.2, in latest build\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-07-29T15:45:37.000-0400",
      "body": "The test has been changed to reflect browser differences.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-29T15:53:59.000-0400",
      "body": "Verified fix using IE6, IE7\n"
    }
  ]
}
---
All inline edit unit test fail

        