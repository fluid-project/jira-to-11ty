---json
{
  "title": "FLUID-145",
  "summary": "Focused thumbnail keeps focused style after tabbing away from Lightbox div in IE 6 & 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2007-12-13T11:34:33.000-0500",
  "updated": "2008-03-12T12:09:22.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Windows XP, IE6 & 7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-256/",
      "key": "FLUID-256",
      "summary": "Focus thumbnail container instead of focus-target in Lightbox"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-7/",
      "key": "FLUID-7",
      "summary": "In IE6 & 7, focus style is not being applied to the first item in the Lightbox"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-12-14T13:38:22.000-0500",
      "body": "This is because there is code in the Reorderer that ignores 'blur' events in IE.  The problem is that putting focus on the link inside the item causes a 'blur' on the reorderer which subsequently removes the 'active' styling from the reorderer so it appears that the reorderer is not usable.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-12T12:09:22.000-0400",
      "body": "This issue was fixed as part of <https://fluidproject.atlassian.net/browse/FLUID-256#icft=FLUID-256>\n"
    }
  ]
}
---
If a thumbnail is focused, tabbing out of the Lightbox DIV does not set it back to the default style.

Looks confusing as it appears that a thumbnail has focus, when in reality it does not.

        