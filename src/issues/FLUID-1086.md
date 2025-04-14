---json
{
  "title": "FLUID-1086",
  "summary": "OSDPL: In-line glossary term links to an invalid page.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-01T15:07:14.000-0400",
  "updated": "2008-08-01T15:10:38.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-08-01T15:10:38.000-0400",
      "body": "Fixed. The problem was related to a single term in the glossary. Deleting that term and re-entering it seemed to have worked.\n"
    }
  ]
}
---
With the Glossary module enabled, glossary terms that appear in the OSDPL links to an invalid page.

For example on this design pattern (<http://osdpl.fluidproject.org/content/drag-and-drop-list-ordering>), the word "affordance" improperly links to <http://osdpl.fluidproject.org/category/glossary/affordance>. The proper link should be <http://osdpl.fluidproject.org/glossary/term/28>

        