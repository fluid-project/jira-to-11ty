---json
{
  "title": "FLUID-3249",
  "summary": "Infusion Builder's \"Download\" button does not change styling between disabled and enabled states",
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
  "reporter": "Justin Obara",
  "date": "2009-10-07T11:40:25.000-0400",
  "updated": "2009-12-17T12:45:56.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF3, FF3.5, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3.5, IE7, IE8 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3359/",
      "key": "FLUID-3359"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-17T12:45:52.000-0500",
      "body": "This problem was resolved with the new design\n"
    }
  ]
}
---
Download button does not change styling between disabled and enabled states

Steps to reproduce:

1\) Open the Infusion Builder

Notice that the styling for the Download button appears the same whether or not anything is checked.

Note: On IE the text slightly changes, but it is not too obvious.

        