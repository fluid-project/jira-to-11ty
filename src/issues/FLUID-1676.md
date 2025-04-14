---json
{
  "title": "FLUID-1676",
  "summary": "Implement ID relation rewrite support in Client-side renderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-10-10T12:59:07.000-0400",
  "updated": "2011-02-22T16:27:48.955-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6beta1"
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
      "date": "2008-10-10T13:43:46.000-0400",
      "body": "Fixed at revision 5755\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:48.953-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
A crucial new feature of the server-side renderer (in the RSF 0.7.3 release) is support for automatic rewriting of id relations in the document - for example \<label for="other"> where "other" is the id of a node which is valid in the template, should be a relation maintained wherever possible, where the markup is rewritten by the renderer. This was covered on RSF Server under issues \
<http://www.caret.cam.ac.uk/jira/browse/RSF-77> and\
<http://www.caret.cam.ac.uk/jira/browse/RSF-111>

        