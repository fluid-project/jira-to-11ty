---json
{
  "title": "FLUID-1438",
  "summary": "OSDPL Functionality: Create content views.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-09-05T12:09:15.000-0400",
  "updated": "2008-10-29T10:44:30.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.6beta1"
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
      "date": "2008-09-05T12:13:27.000-0400",
      "body": "Iteration20\n"
    },
    {
      "author": "Blake E",
      "date": "2008-09-05T15:44:43.000-0400",
      "body": "After mine and Jonathan's meeting this morning, we agreed on the following structure and drupal controls.\n\nContent Type: Pattern\\\n\\===============\n\nComplete aka Production Ready Pattern\\\n\\===============\\\nControl Vocabulary: Status\n\nPublic Visibility\\\nNode Status Control: Published\n\nViewing\\\nAdapted View from: Drupal Views Module - <http://drupalmodules.com/module/views>\\\nKey Filter: Published = Yes, Type = Pattern, Vocabulary:Status = Complete\n\nDraft Pattern\\\n\\===============\\\nControl Vocabulary: Status\n\nPublic Visibility\\\nNode Status Control: Published\n\nPrivate Visibility\\\nNode Status Control: unPublished\n\nViewing\\\nAdapted View from: Drupal Views Module - <http://drupalmodules.com/module/views>\\\nKey Filter: Published = Yes, Type = Pattern, Vocabulary:Status = Draft\n"
    }
  ]
}
---
Creating "views" within Drupal to display,filter, and sort content.

* View will govern display of Complete and Draft Design Patterns.

        