---json
{
  "title": "FLOE-129",
  "summary": "Media queries in Metadata Editor should use em not pixels",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2013-12-16T12:14:23.217-0500",
  "updated": "2013-12-16T12:14:23.217-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Metadata"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the Metadata Editor, bootstrap and some media queries are using pixels instead of ems. For proper reflowing of text based on dimensions / size, the CSS and bootstrap should use em.

Bootstrap can be customized to use ems by using their customized builder.

        