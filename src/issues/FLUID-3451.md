---json
{
  "title": "FLUID-3451",
  "summary": "favicon missing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-18T11:54:56.000-0500",
  "updated": "2013-04-11T17:43:18.149-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3451/FLUID-3451-1.patch.txt",
      "filename": "FLUID-3451-1.patch.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3451/FluidIcon.png",
      "filename": "FluidIcon.png"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2010-01-26T09:32:39.000-0500",
      "body": "I have attached a patch containing the html change to include a favicon shortcut. I've also uploaded the FluidIcon.png that we use for the fluidproject.org website.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-26T09:32:57.000-0500",
      "body": "The attached patch should solve this issue.\n"
    }
  ]
}
---
favicon.ico is missing and causing many errors in the apache logs. The advantage of including a favicon is to reduce the errors in the error log and make it easier to track down real errors.

        