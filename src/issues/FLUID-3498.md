---json
{
  "title": "FLUID-3498",
  "summary": "Renderer does not remove rsf:ids that were \"inferred\" during parsing from rendered markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-02-19T00:29:22.000-0500",
  "updated": "2014-03-03T13:47:00.907-0500",
  "versions": [
    "1.1.2",
    "1.3.1"
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
      "date": "2010-02-19T00:39:52.000-0500",
      "body": "Fixed at revision 9455. A piece of drift between the Java and Javascript versions of the algorithm...\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:56:16.662-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
Those rsf:id="scr=null" and "scr=rewrite-url" which are inferred during parsing of a template are not removed from the final markup. This proved critical for Engage as a section of markup already rendered once by the renderer was used again as a template.

This exposes a rather deeper architectural problem with the renderer, that these ids exist in an at most one-to-one relationship with tags. This causes effects such as the "tag singularity disorder" afflicting for example links which may be rendered with the link text directly attached to the link, or in a separate component. This "disturbance of multiplicity" at present cannot be prevented from infecting the component tree.

        