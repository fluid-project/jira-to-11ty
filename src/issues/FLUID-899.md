---json
{
  "title": "FLUID-899",
  "summary": "Layout Customizer and Reorderer lacking full CSS-P support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Jacob Farber",
  "date": "2008-07-15T14:28:08.000-0400",
  "updated": "2011-01-10T14:23:59.892-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-10T14:23:59.890-0500",
      "body": "Not sure if this still needs to be done. We will be looking into the styling of our components and demos again (infusion 1.4 - 1.5).  If any issues arise we can open specific jiras for them.\n"
    }
  ]
}
---
Another pass is required on the Layout Customizer and Reorder in order to compensate for potential CSS-P problems. CSS-P needs to be considered when dropping nodes around the document and those nodes use absolutely/fixed/etc positioning, padding/margins, etc.  and might therefore break out of their containers.

        