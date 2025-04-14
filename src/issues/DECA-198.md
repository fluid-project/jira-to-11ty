---json
{
  "title": "DECA-198",
  "summary": "Create a Decapod installer that only downloads and installs the required dependencies",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-01-11T12:16:22.281-0500",
  "updated": "2012-12-03T11:05:56.795-0500",
  "versions": [
    "0.5a",
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-197/",
      "key": "DECA-197",
      "summary": "Create a standalone Decapod installer capable of being distributed without Internet connectivity"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Create a Decapod installer that only downloads the components required for the target system. This is different from the "standalone" installer (see DECA-197) in that it will download and install what is needed.

The installer should also have a good, dependable uninstall routine.

        