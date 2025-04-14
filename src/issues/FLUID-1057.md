---json
{
  "title": "FLUID-1057",
  "summary": "cursor changes only over text of title bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-07-29T11:23:35.000-0400",
  "updated": "2008-08-14T11:26:29.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "XP SP3, IE 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T11:26:29.000-0400",
      "body": "changed test plan. should have been written as pointer changes to move cursor.\n"
    }
  ]
}
---
When moving the mouse cursor over the portlet title bar, the mouse cursor changes to a 4 pointed arrow rather than a hand if you are not over the actual text in the title bar. Since you can grab anywhere in the title bar the cursor should probably change to a hand anywhere in the title bar.

        