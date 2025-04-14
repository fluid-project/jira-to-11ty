---json
{
  "title": "ENGAGE-372",
  "summary": "The alt text for the icons in navigation bar aren't correctly localized; they're in English only",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-11T11:08:52.000-0500",
  "updated": "2010-02-26T12:32:51.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Internationalization",
    "Navigation Bar"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-446/",
      "key": "ENGAGE-446"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-11T11:09:01.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    }
  ]
}
---
At the moment, we don't load a message bundle for the icon alt text in the navigation bar. This will affect non-English speaking screen reader users when using the navigation bar icons.

        