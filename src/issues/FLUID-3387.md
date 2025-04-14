---json
{
  "title": "FLUID-3387",
  "summary": "Renderer autoBinding doesn't properly update display with changed model values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Anastasia Cheetham",
  "date": "2009-11-19T15:04:28.000-0500",
  "updated": "2017-03-13T10:57:41.681-0400",
  "versions": [
    "1.1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4928/",
      "key": "FLUID-4928"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-11-19T15:06:26.000-0500",
      "body": "I've committed a manual test case that illustrates the problem using as simple as possible markup, etc. that I can manage:\n\n<http://source.fluidproject.org/svn/fluid/infusion/trunk/src/webapp/tests/manual-tests/html/data-binding.html>\\\n<http://source.fluidproject.org/svn/fluid/infusion/trunk/src/webapp/tests/manual-tests/js/data-binding.js>\n"
    }
  ]
}
---
If more than one component in the tree are autobound to the same field in the model, model changes made through edits (e.g. an \<input> field) are not automatically displayed in the other field that is bound to the same model.

        