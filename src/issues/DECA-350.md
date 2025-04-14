---json
{
  "title": "DECA-350",
  "summary": "If Dewarp fails to produce valid output, a message should be sent to user and ZIP file not generated",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-12-03T11:23:44.697-0500",
  "updated": "2012-12-03T11:23:44.697-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Dewarp"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently if dewarp failed, the server still creates a zip file but has no contents inside.

The UI should instead report a message of a problem and not produce a zip file for downloading. Ideally this reporting should happen early in the process so the user doesn't have to wait until the end to find out something went wrong.

        