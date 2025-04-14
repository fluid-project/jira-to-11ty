---json
{
  "title": "FLUID-3218",
  "summary": "Description and Tags component need to be themed for iPhone",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-09-30T17:16:23.000-0400",
  "updated": "2009-10-02T13:38:19.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Mobile FSS"
  ],
  "environment": "Webkit\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3218/FLUID-3218_description.patch",
      "filename": "FLUID-3218_description.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3218/FLUID-3218_tags.patch",
      "filename": "FLUID-3218_tags.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T23:26:33.000-0400",
      "body": "Tag component patch: Uploaded patch with class name additions and style tweaks for when used with the iphone theme\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-01T00:25:01.000-0400",
      "body": "Description patch: adds a stylized \"+\" or \"-\" button for the iphone theme\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-01T11:14:27.000-0400",
      "body": "Added tag and description styles when used with iphone theme\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-01T12:31:38.000-0400",
      "body": "Bug Parade Infusion 1.1.2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-01T12:56:39.000-0400",
      "body": "Just did a code review and testing. Everything looks okay, except the placement of the \"+\" is not centred.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-02T13:38:19.000-0400",
      "body": "I have reviewed and tested the latest update to this, which fixed the issue with the placement of the \"+\".&#x20;\n"
    }
  ]
}
---
Description and Tags need styles when used with fl-theme-iphone

        