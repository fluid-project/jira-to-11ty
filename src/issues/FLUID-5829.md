---json
{
  "title": "FLUID-5829",
  "summary": "Fixes to Renderer docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2015-12-10T11:16:41.455-0500",
  "updated": "2024-07-22T10:35:00.345-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "YashJipkate",
      "date": "2020-04-08T15:45:24.189-0400",
      "body": "The 'Renderer Components' and the 'Renderer Component Trees' sections are already fixed in the latest master branch. I have fixed the other two parts in \\[this PR|<https://github.com/fluid-project/infusion-docs/pull/179>]\n\nFor the 2nd point of 'HowToUseTheRenderer', I have used permalink for the concerned block of code it links to so that the links do not point to any unexpected lines. I did this because I think that saying 'See fluid.render on this page' would be too vague.\n"
    }
  ]
}
---
Some issues were found in various Renderer-related documentation:

Renderer.html

* "markup agnoticism" link should link to "markup agnoticism" section of the Framework Concepts document

HowToUseTheRenderer.html

* "parent grade" link should jump to "Specifying parent grades" section of the Component Grades document?
* fluid.render link goes to specific lines in code in github - these lines may change over time - should we hard-code such references in the docs? Perhaps better to generalize it by saying "See fluid.render on this page".

Renderer Components:

* Prototree link is broken
* Produce tree link is broken
* contains bad link to ../to-do/Components.html

Renderer Component Trees:

* broken link (404) to Infusion Components in first paragraph of Renderer Component Trees

        