---json
{
  "title": "FLUID-5830",
  "summary": "Use npm to ease development of docs-template based sites",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2015-12-14T08:37:14.946-0500",
  "updated": "2024-07-23T10:46:26.542-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2016-02-26T10:09:24.682-0500",
      "body": "Started this task under this branch: <https://github.com/jhung/docs-core/tree/FLUID-5830>\n\nTodo:\n\n* Use npm to get Infusion, jQuery, and Foundation\n* Delete existing Infusion, jQuery, and Foundation from being tracked\n* Update docs-template to use this new structure (i.e. default.css file has moved)\n* Refactor styles related to icons and fonts into Template and remove it from Core.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:46:26.350-0400",
      "body": "This iteration of the docs platform is no longer in use. We’ve switched to using 11ty. [Trivet](https://github.com/fluid-project/trivet) is one replacement and can be used as a template for other projects.\n"
    }
  ]
}
---
Docs-template should use npm so that sites built using docs-template does not need to fork the repository each time and deal with possible conflicts. This makes maintaining sites difficult when trying to get updates made to the template.

        