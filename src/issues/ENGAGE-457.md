---json
{
  "title": "ENGAGE-457",
  "summary": "The view and viewByID have a bug in couchdb view where it fails for some of the artifacts.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-02-25T11:50:26.000-0500",
  "updated": "2014-03-03T13:46:16.312-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Data Import"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-459/",
      "key": "ENGAGE-459"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-457/ENGAGE-457.patch",
      "filename": "ENGAGE-457.patch"
    }
  ],
  "comments": []
}
---
The view and viewByID have a bug in couchdb view where it fails for some of the artifacts. The view should not do any mapping in the first place and needs to be addressed.

        