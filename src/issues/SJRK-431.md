---json
{
  "title": "SJRK-431",
  "summary": "Add automated clean-up of stale unpublished media files",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-11-26T11:12:03.323-0500",
  "updated": "2020-11-26T11:12:26.437-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-345/",
      "key": "SJRK-345",
      "summary": "Add automated clean-up for unpublished stories"
    }
  ],
  "attachments": [],
  "comments": []
}
---
With the changes to SJRK-410 it was required to keep uploaded files to prevent the published site from breaking. This means that there will be potentially be old files lying around that are no longer in use. We should have a process for clearing out any unused files on some sort of schedule.

        