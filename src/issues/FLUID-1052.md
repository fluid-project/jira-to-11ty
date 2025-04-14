---json
{
  "title": "FLUID-1052",
  "summary": "cursor changes to 4 pointed arrow rather than hand",
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
  "date": "2008-07-29T10:44:18.000-0400",
  "updated": "2008-08-01T09:41:39.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "XP SP3, IE7 AND IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-29T13:14:26.000-0400",
      "body": "the css is correct, in that the cursor changes to the \"Move\" cursor which in IE is the four pointed arrow and not a hand.&#x20;\n\nThere really isn't an equivalent for the FF hand for Move.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-01T09:41:39.000-0400",
      "body": "Changed test plan to include the both the hand and the cross, as per Eli's comments\n"
    }
  ]
}
---
On the sortable vertical list test page, the mouse cursor when hovering over a list item is a four pointed arrow rather than the specified hand.

        