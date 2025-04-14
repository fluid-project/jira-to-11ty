---json
{
  "title": "FLUID-2202",
  "summary": "Server version of uploader broken in both flash 10 and flash 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-02-06T10:18:57.000-0500",
  "updated": "2009-02-10T08:39:52.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-02-09T12:37:38.000-0500",
      "body": "Fixed by not wrapping the decorators: option in an array. There is only of them, after all.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:38:36.000-0500",
      "body": "verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:38:57.000-0500",
      "body": "forgot to delete bug parade comment will reopen close\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-10T08:39:52.000-0500",
      "body": "deleted bug parade comment, will reclose\n"
    }
  ]
}
---
In Flash 9 an exception is thrown\
\[Exception... "'Invalid function name' when calling method: \[nsIDOMEventListener::handleEvent]" nsresult: "0x8057001e (NS\_ERROR\_XPC\_JS\_THREW\_STRING)" location: "\<unknown>" data: no]

In Flash 10 the "Browse Files" button is not displayed at all

<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/#>

        