---json
{
  "title": "FLUID-1934",
  "summary": "Implement support for \"payload-component\" syntax for tag displacement",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-12-05T16:31:50.000-0500",
  "updated": "2011-01-18T12:31:29.312-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
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
      "date": "2008-12-05T18:21:19.000-0500",
      "body": "Fixed at revision 6166 - test cases required\n"
    }
  ]
}
---
RSF Server featured a specially recognised id of "payload-component", which when applied, would cause the component peering tag to be displaced to a tag nested somewhere within the initial peering tag (that used for selection).

<http://www2.caret.cam.ac.uk/rsfwiki/Wiki.jsp?page=PayloadComponent>

This functionality should be implemented and verified in the client-side renderer, as well as porting all relevant bug fixes such as <https://bugs.caret.cam.ac.uk/browse/RSF-115>

        