---json
{
  "title": "FLUID-6073",
  "summary": "Table of Contents doesn't update when toggling simplify on/off",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-15T14:54:08.942-0500",
  "updated": "2016-11-15T15:27:21.468-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Prefs Framework"
  ],
  "environment": "Firefox 50, Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1\. Open the Prefs Framework demo\
2\. Open the prefs editor\
3\. Enable the table of contents\
4\. Enable simplify&#x20;

Notice that all of the headers are still present in the Table of Contents. The reverse is true if simplification is enabled before the table of contents.

        