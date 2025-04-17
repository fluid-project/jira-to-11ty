---json
{
  "title": "FLUID-3488",
  "summary": "Renderer: initBlock rendering omits semi-colon",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2010-01-29T08:42:06.000-0500",
  "updated": "2017-03-13T11:06:32.871-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
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
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-03-13T11:06:32.871-0400",
      "body": "Antranig Basman could you please comment on whether or not this is still an issue.\n"
    }
  ]
}
---
The portion of the Renderer code in fluidRenderer.js fixupTree() that renders the actual script block contents neglects to add the semi-colon (😉 after the close-bracket (')') of the function invocation.

        