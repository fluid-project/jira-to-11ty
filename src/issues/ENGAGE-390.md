---json
{
  "title": "ENGAGE-390",
  "summary": "Some basic styling work needs to be done on Object Code Entry",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Jess Mitchell",
  "date": "2010-02-16T14:59:08.000-0500",
  "updated": "2010-02-18T11:17:24.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-390/ENGAGE-390-trunk.patch",
      "filename": "ENGAGE-390-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-16T14:59:20.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-17T13:59:06.000-0500",
      "body": "a white background makes the boxes with the entered digits hard to see.  need to change to a grey background.\n"
    },
    {
      "author": "Jess Mitchell",
      "date": "2010-02-17T15:19:34.000-0500",
      "body": "This patch includes #f3f3f3 for the background color since losing the pinstripes made it hard to see the digit boxes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T11:17:24.000-0500",
      "body": "Reviewed and committed Jess' patch ENGAGE-390-trunk.patch\n\nMade one small change to set the background colour on fl-theme-iphone instead.&#x20;\n"
    }
  ]
}
---
there are lines on the page – the pinstripes that are default for an iPhone page.

        