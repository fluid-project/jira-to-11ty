---json
{
  "title": "FLUID-2413",
  "summary": "Avatar for the nested reorderer includes the outer reorderable element: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-03-25T15:58:55.000-0400",
  "updated": "2009-05-05T13:26:09.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T13:26:09.000-0400",
      "body": "We no longer use the nested reorderer manual test, and the uPortal mock-up page, which does contain a nested reorderer, doesn't display this issue.\n"
    }
  ]
}
---
Avatar for the nested reorderer includes the outer reorderable element: using IE

Steps to reproduce:

1\) Open the nested reorderer manual test page\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/reorderer/nested-reorderers/nested.html>

2\) Attempt to move one of the sub-list items

Notice that the avatar contains the parent item and all of the siblings

        