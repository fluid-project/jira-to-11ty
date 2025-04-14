---json
{
  "title": "SJRK-52",
  "summary": "Let templates refer to other templates",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Open",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-02-13T16:30:24.216-0500",
  "updated": "2019-08-13T11:32:04.616-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-237/",
      "key": "SJRK-237"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-04-02T17:15:02.027-0400",
      "body": "repeated content is enclosed within the comments \"<\n\n<!-- media: file UNKNOWN_MEDIA_-- repeated markup start -->\" and \"< -->\n\n\\-- repeated markup end -->\"\n"
    }
  ]
}
---
Implement template management such that a handlebars template may include references to other, nested templates, ad infinitum. This may require use of the server-specific features in gpii.handlebars and not only gpii.handlebars.renderer.standalone.

E.g.

* "Index template" has a reference to the editor template
  * editor template refers to block templates

The aim being to make the markup DRYer

        