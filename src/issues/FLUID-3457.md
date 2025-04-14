---json
{
  "title": "FLUID-3457",
  "summary": "InlineEdit Integration conflicts with regular FCK Edits on page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Steven Githens",
  "date": "2009-12-30T09:31:45.000-0500",
  "updated": "2014-03-03T14:17:20.883-0500",
  "versions": [
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE8&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3457/InlineEditIntegrations.js.diff.txt",
      "filename": "InlineEditIntegrations.js.diff.txt"
    }
  ],
  "comments": [
    {
      "author": "Steven Githens",
      "date": "2009-12-30T09:33:36.000-0500",
      "body": "Attaching a patch.  If the FCK Editor is a regular one placed on the page (ie. not a Fluid Inline edit), the 'that' from the lookup will be null.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-12-31T14:03:27.000-0500",
      "body": "Thanks for this patch - applied at revision 8946. Merry New Year!\n\nIt appears that this \"failure\" was actually occuring on all browsers, but only generated a visible fault on IE8.\n"
    }
  ]
}
---
When using IE8 and loading a page that uses both Fluid Infusion, and a regular FCK Editor (of varying versions), an JS errors appears saying that "events" is null or not an object.

        