---json
{
  "title": "DECA-336",
  "summary": "Make style consistent across Decapod UI components",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-10-30T10:41:13.470-0400",
  "updated": "2012-12-03T10:48:21.075-0500",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-11-20T10:50:13.585-0500",
      "body": "Priority:\n\n1\\. Ensure proper use grammar. Consistent terminology, tone, and brevity across all UIs\\\n2\\. Style fixes lower priority as long as a style exists for a particular event (i.e. active style doesn't have to be consistent as long as there is an active style).\n"
    }
  ]
}
---
There are some inconsistencies between the styles used in various Decapod components:

* Ensure use of em instead of px
* Hover properly displays over clickable items (gradient, transition, cursor styles)
* Terminology (i.e. "Reset" vs "Restart")

        