---json
{
  "title": "FLUID-6063",
  "summary": "Review use of inline table styles in complex doc tables",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Jonathan Hung",
  "reporter": "Antranig Basman",
  "date": "2016-11-11T12:24:42.728-0500",
  "updated": "2024-08-01T09:37:12.399-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2016-11-18T11:17:06.860-0500",
      "body": "An alternative to the use of styling and symbols such as daggers and double daggers for variant values would be to repeat each variation in full, such as in the jQuery docs: <http://api.jquery.com/attr/#attr2>\n\nI think this might be a little easier to read but there is going to be some overhead in maintenance due to the duplication of information.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-08-01T09:36:06.452-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/297>&#x20;\n"
    }
  ]
}
---
<https://github.com/fluid-project/infusion-docs/pull/103> reintroduced some inline CSS styling that had previous been in use in the previous incarnation of our documentation on the Confluence wiki platform. Given we had had to manage without this for a while, the information that it conveyed (that particular sets of options were exclusive and not to be used simultaneously) had been encoded by other means (particular reference symbols such as daggers and double daggers). However, we should review the use of this styling and whether it is worth hoisting up into the shared infusion-docs.css area

        