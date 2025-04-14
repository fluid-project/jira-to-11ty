---json
{
  "title": "FLUID-2439",
  "summary": "Pasted tabs converted to spaces",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T11:48:30.000-0400",
  "updated": "2009-04-07T13:58:03.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "XP. FF3 and Opera 9.6\\\nXP IE8\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-886/",
      "key": "FLUID-886",
      "summary": "'tab' character is displayed as single space"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-04-06T15:38:43.000-0400",
      "body": "In IE8 the tabs are still visible if you go back to the field to edit it, but that they appear as a single space after editing is complete. I'm not sure about the other 2 browsers mentioned above.\n"
    }
  ]
}
---
When pasted into a simple text inline edit field, a text string containing tabs has the tabs converted to a single space.

        