---json
{
  "title": "FLUID-1291",
  "summary": "OSDPL A11y: invisible links hidden in left sidebar, and in \"Printer Friendly\" block",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T13:56:46.000-0400",
  "updated": "2008-10-30T09:29:19.000-0400",
  "versions": [
    "0.4"
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
      "author": "Jonathan Hung",
      "date": "2008-10-30T09:29:18.000-0400",
      "body": "Fixed with update to Drupal 5.12 and latest version of the module.\n"
    }
  ]
}
---
There are invisible links hidden in the left-hand column navigation (in IE only) and hidden along with the Printer Friendly text block.

To discover, tab through the OSDPL and you will find that focus can be set on non-rendering items. Activating these links take you to unexpected locations on the site.

This is an accessibility issue and a potential security hole.

        