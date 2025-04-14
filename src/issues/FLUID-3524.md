---json
{
  "title": "FLUID-3524",
  "summary": "Self-closed tags should be rendered as such even if rendered using components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2010-03-12T01:35:34.000-0500",
  "updated": "2014-03-03T13:45:12.898-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-03-12T02:01:03.000-0500",
      "body": "Fixed in infusion at rev 9657, please verify in engage.\n"
    }
  ]
}
---
See <https://fluidproject.atlassian.net/browse/ENGAGE-511#icft=ENGAGE-511>: Despite being supplied with an XHTML document type, Safari stubbornly misinterprets tags provided in the XHTML style, leading to document corruption.

        