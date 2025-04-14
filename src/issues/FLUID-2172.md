---json
{
  "title": "FLUID-2172",
  "summary": "Reordering a table row places entire row into a single cell: using FF",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2009-01-28T14:35:16.000-0500",
  "updated": "2009-01-28T16:22:00.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2173/",
      "key": "FLUID-2173"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-28T14:36:01.000-0500",
      "body": "Using Firefox, go to:\n\n<http://garden.dmc.dc.umich.edu:8080/portal>\n\nLogin as admin/admin\n\nGo to site FLUID Integration\n\nGo to Announcements, then click on Reorder link.\n\nAttempt to reorder the rows\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-28T14:36:42.000-0500",
      "body": "Quoting Gonzalo\n\n\"If I give the table rows a \"display:table\"  property/value then is works, but it is no longer a \"good\" row. You can see that if you go to Resources/reorder or Assignments/reorder.\"\n"
    }
  ]
}
---
Reordering a table row places entire row into a single cell

        