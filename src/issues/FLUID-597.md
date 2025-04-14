---json
{
  "title": "FLUID-597",
  "summary": "Create Header for Views",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Allison Bloodworth",
  "date": "2008-05-14T00:10:45.000-0400",
  "updated": "2013-04-11T17:33:04.643-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-05-14T00:10:53.000-0400",
      "body": "iteration11\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T22:13:39.000-0400",
      "body": "Here are the instructions on how to do this using arguments: <http://drupal.org/node/149138>. I used this method for patterns\\_by\\_term and patterns\\_by\\_category.\n\nIt appears that each Title field can be used: if you use two, the first puts whatever argument you use (e.g. %1 = \"UI Design Pattern Category) in the breadcrumbs, the second puts a title on the page. If you just use the first or second argument alone, you just get a title for the page. There is some weirdness that happens (e.g. \"%2\" in the breadcrumbs if you put it in the first title field) if you put the wrong argument in the wrong title field.\n"
    }
  ]
}
---
In patterns\_by\_category it should be the category name, in patterns\_by\_term it should be the term name. Style it the same way the title appears in a uidp node (e.g. "File Upload" in <http://osdpl.fluidproject.org/content/file-upload>).

        