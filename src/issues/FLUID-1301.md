---json
{
  "title": "FLUID-1301",
  "summary": "Inline Edit - entire container is \"hot\", not just the interesting part (the editable unit)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2008-08-21T15:24:05.000-0400",
  "updated": "2008-12-03T11:50:27.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1753/",
      "key": "FLUID-1753"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-532/",
      "key": "FLUID-532",
      "summary": "Checkbox example: Mouse clicking on white space far right of checkboxes will activate the checkbox to the far left"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1301/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-08-21T15:31:03.000-0400",
      "body": "Checkbox hotspot expands beyond the checkbox proper\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:05:42.000-0400",
      "body": "'screenshot-1' shows the hover message displayed when the pointer is hovering to the far right of the text.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T22:04:55.000-0500",
      "body": "This was probably fixed by the fix for <https://fluidproject.atlassian.net/browse/FLUID-1310#icft=FLUID-1310> at revision 6034 - please reverify.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:50:27.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
the element designated as the container becomes the hotspot for the tooltip, so if you have a block level element with a small editable element, the entire block level element will fire the tooltip - but not the hover effect.

        