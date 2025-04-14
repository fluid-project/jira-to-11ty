---json
{
  "title": "FLUID-5707",
  "summary": "Add links to related tutorials",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2015-07-14T11:13:51.018-0400",
  "updated": "2024-07-31T16:10:40.282-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2015-07-14T11:17:49.518-0400",
      "body": "This might be too fancy, but it might be nice to have this generated i.e. add the references to related pages to the metadata, and have the HTML generated from that. It's possible this might make maintenance easier? Or not...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T16:09:37.850-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/285>&#x20;\n"
    }
  ]
}
---
We should add to any relevant documentation page links to related tutorials, in some form of "See also" or "Related" section, or something.

Recently, a partner was trying to add UIO to a website and turned to the documentation for help. We have a tutorial, but the partner found the more complicated, less helpful documentation at <http://docs.fluidproject.org/infusion/development/PreferencesEditor.html>, and there is nothing there referencing the tutorial.

I think we should design an appropriate look/layout for "related links" and use that to add these kinds of internal links as much as possible. Especially given the lack of search, these links will make the docs much more useful.

        