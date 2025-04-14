---json
{
  "title": "FLOE-225",
  "summary": "Test Physics book content with ATs and improve accessibility of content where needed",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-08-20T09:24:40.796-0400",
  "updated": "2015-06-17T10:47:42.689-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Using ATs, test the accessibility of the EPUB 3 content and make improvements where needed. In particular:

* test with screen reader on android, iOS, Windows, and Mac OS X.
* check support for \<abbr>, aria, videos with multiple sources, MathML
* test with different readers (i.e. Readium, iBooks, Calibre, Lucifox) and compare experiences.

        