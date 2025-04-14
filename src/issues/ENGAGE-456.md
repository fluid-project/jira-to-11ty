---json
{
  "title": "ENGAGE-456",
  "summary": "Create test verifying that the send email service parameters for My Collection are correct",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Svetoslav Nedkov",
  "date": "2010-02-25T06:43:41.000-0500",
  "updated": "2017-12-22T09:44:32.783-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-456/ENGAGE-456.patch",
      "filename": "ENGAGE-456.patch"
    }
  ],
  "comments": [
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-25T07:22:09.000-0500",
      "body": "Patch <https://fluidproject.atlassian.net/browse/ENGAGE-456#icft=ENGAGE-456>.patch adds tests for verifying that the My Collection send email feature sends the correct parameters to the server side script.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:32.781-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Add a test that verifies that the parameters sent to the send email service are correctly built.

        