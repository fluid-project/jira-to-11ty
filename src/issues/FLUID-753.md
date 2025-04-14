---json
{
  "title": "FLUID-753",
  "summary": "OSDPL: Update patterns_by_term view to indent sub-patterns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T12:33:42.000-0400",
  "updated": "2011-01-20T14:36:22.590-0500",
  "versions": [
    "0.5beta1"
  ],
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
      "date": "2008-06-10T12:33:51.000-0400",
      "body": "\\-\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-20T14:36:22.589-0500",
      "body": "To be addressed by resolving <http://issues.fluidproject.org/browse/FLUID-588>.\n"
    }
  ]
}
---
When you go to Information Organization (<http://osdpl.fluidproject.org/info_org>), Drag and Drop - Layout Preview and Drag and Drop - List Ordering appear in the table to be at the same level as Drag and Drop. Since they are essentially child patterns of Drag and Drop (and we've set it up that way to display in the navigation), they should appear in the table as indented under Drag and Drop or in some other way show that they are children of this Pattern. I believe we'd need to use Custom Argument Handling code in the patterns\_by\_term view to do this.,&#x20;

        