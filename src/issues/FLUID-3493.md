---json
{
  "title": "FLUID-3493",
  "summary": "Renderer appears to corrupt templates containing empty tags on Opera (maybe others)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-02-09T19:30:38.000-0500",
  "updated": "2014-07-07T15:38:17.961-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-09T20:38:43.000-0500",
      "body": "This has been revealed to be an issue of corruption of empty tags (such as \\<div />) through the document HTML. In Opera, these are quietly degraded to \"\\<div>\" with resulting corruption of the document structure. Either do not write templates with these tags, or else armour them with CDATA or comment wrapping in order to protect them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:38:17.942-0400",
      "body": "Opera is no longer a supported browser.\n"
    }
  ]
}
---
Implementing a template with a number of empty divs on Opera seems to expose a parsing anomaly whereby not all close tags are seen (guestbook.html in Engage). Also, a possibly related issue is seen on Firefox with duplication of empty \<br/> tags

        