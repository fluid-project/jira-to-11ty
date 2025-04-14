---json
{
  "title": "FLUID-3871",
  "summary": "Spaces after text cause padding error in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2010-12-02T15:55:54.502-0500",
  "updated": "2014-03-03T13:40:07.955-0500",
  "versions": [
    "1.2.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-17T13:14:38.142-0400",
      "body": "I'm unable to reproduce this problem in v1.4\n"
    }
  ]
}
---
Entering spaces after text and hitting 'enter' moves the pencil to the wrong spot (under the text), probably because padding-right is affected.

        