---json
{
  "title": "FLUID-893",
  "summary": "OSDPL: Add missing sections to the OSDPL design pattern format",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Jonathan Hung",
  "date": "2008-07-11T18:37:09.000-0400",
  "updated": "2013-04-11T17:31:17.975-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-373/",
      "key": "FLUID-373"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-934/",
      "key": "FLUID-934"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-16T20:57:13.000-0400",
      "body": "Let's hold off on this task for now as we need to finalize the list of design pattern elements as a group, either on the mailing list or at our next OSDPL meeting on July 23rd.\n"
    }
  ]
}
---
OSDPL Design Pattern format - add the following sections:

* "Related Fluid Design Patterns"
* "Examples" section with "Example Fluid implementations" and "Similar Implementations" sub-sections
* "References" (sources used to create this pattern)
* "Related patterns" (relationships to other patterns within our DPL)
* "Design Advice"\
  &#x20;         o CSS tips, Variations of the design, advice on when to implement each variation\
  &#x20;         o e.g. Inline Edit: when to have an explicit Save button\
  &#x20;         o Design advice on what's outside of the component e.g. Uploader: "make sure the newly uploaded files are in focus" --> should be included in the "How" section, and just distinguish what's in the component and what's not. (Anastasia)

We feel there should be a section that describes tasks the implementing designer or developer needs to do to ensure the seamless integration of the component. For example, the Uploader component deals strictly with uploading of files, however, the designer should highlight or indicate which files have been uploaded after transitioning from the Uploader back to their work context.

Question: what should the title of this section be?

* "Transition", "Component Integration"

Iteration14

        