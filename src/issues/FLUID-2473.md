---json
{
  "title": "FLUID-2473",
  "summary": "Image reorderer unit test fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-04-02T12:39:11.000-0400",
  "updated": "2009-04-07T11:13:53.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2431/",
      "key": "FLUID-2431",
      "summary": "Styling in the unit test is incorrect."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2473/FLUID-2473.patch",
      "filename": "FLUID-2473.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-02T14:56:03.000-0400",
      "body": "If this is just an incorrect path or missing style sheet, it can be verified on just one or two configurations. (probably IE6)\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-04-06T16:24:17.000-0400",
      "body": "Fixed missing CSS file and missing class names\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-04-06T16:42:09.000-0400",
      "body": "I've looked at this patch, and tested it in IE6 on Win XP. It looks good to me, and work just fine.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-07T11:13:53.000-0400",
      "body": "Verified fix using:\n\nIE 6 (Win 2000)\n"
    }
  ]
}
---
Failure might be due to lack of proper styling and incorrect thumnail appearance. This might be solved by updating the necessary css paths.

        