---json
{
  "title": "FLUID-4385",
  "summary": "Non-string values supplied as attribute decorator values will cause exception in renderer pipeline",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-08-03T03:33:52.782-0400",
  "updated": "2015-06-09T14:13:45.352-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As reported by Åz in IRC today - messages of the form "1 has no method named 'replace'" when supplying, e.g. attrs: {key: 3}. This occurs when attempting to XML-encode the attribute value. Simple primitive values should be converted to strings first as a courtesy.

        