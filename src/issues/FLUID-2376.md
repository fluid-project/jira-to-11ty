---json
{
  "title": "FLUID-2376",
  "summary": "Update name/values of \"aria-grabbed\" state as per ARIA latest spec.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2009-03-17T14:56:45.000-0400",
  "updated": "2009-03-24T18:07:09.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-17T15:41:04.000-0400",
      "body": "Switching \"Component\" from the \"Image Reorderer\" to \"Reorderer\" as this applies to any use that involves drag-and-drop (not just images).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T15:55:07.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-24T13:50:00.000-0400",
      "body": "The changes made for this fix are consistent with the description. But:\\\nIn the test file, the text strings describing the expected test results were not updated to reflect the new naming and values. This is relatively minor, but if tests actually fail, the incorrect text might make debugging the failing tests a bit confusing.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-24T14:23:05.000-0400",
      "body": "Ok, the test files have been updated. Looks great.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T18:07:09.000-0400",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\n"
    }
  ]
}
---
The name and value space of the aria-grabbed state (formerly "aria-grab") changed just weeks before the last call draft of the ARIA spec.  The rationale was consistency in form with other boolean properties (e.g., aria-checked).

In brief:

* the name is now "aria-grabbed".
* the presence of "aria-grabbed" marks the element as "draggable".
  * if aria-grabbed="false", the element is **not** in the set of objects marked for dragging.
  * if aria-grabbed="true", the element is in the set of grabbed objects marked for dragging.
  * if aria-grabbed="undefined", the element is not draggable and can't be in the set.  The same is true if the aria-grabbed attribute is missing entirely.

For the details, see: <http://www.w3.org/TR/wai-aria/#aria-grabbed>

        