---json
{
  "title": "ENGAGE-246",
  "summary": "XMLtoJSON import code deals with XML comments incorrectly, as well as providing no facility for inline markup",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2010-01-18T00:58:42.000-0500",
  "updated": "2014-03-03T14:15:39.529-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Data Import"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-246/config.json",
      "filename": "config.json"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-246/Importer.java",
      "filename": "Importer.java"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-01-20T19:23:48.000-0500",
      "body": "Issues resolved and merged up into main trunk - work on data import continues under <https://fluidproject.atlassian.net/browse/ENGAGE-264#icft=ENGAGE-264>\n"
    }
  ]
}
---
For example, the new "exhibits" schema for McCord contains sections of XML which actually encode HTML which should be delivered in literal form into the JSON structure.

<http://www.mccord-museum.qc.ca/scripts/XMLExhibit.php?exhibitID=4&Lang=1>

XML comments are also delivered as raw text.

        