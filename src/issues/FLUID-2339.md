---json
{
  "title": "FLUID-2339",
  "summary": "Toggling Table of Contents on, throws an error: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-12T12:43:51.000-0400",
  "updated": "2009-03-25T11:49:25.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2365/",
      "key": "FLUID-2365"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:44:26.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-20T10:50:52.000-0400",
      "body": "This seems to happen when adding the anchors to the document.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-24T02:52:15.000-0400",
      "body": "Fixed at revision 6817.\\\nIt seems that IE is extremely fussy, when dealing with multiple documents perhaps within iframes, that new markup nodes are created using the correct owner document. I spent a while writing raw DOM equivalents, but eventually discovered that jQuery supports syntax like the following:&#x20;\n\nvar node = $(\"\\<div>\\</div>\", container\\[0].ownerDocument);\n\nThis approach was suggested by the following report: <http://dev.jquery.com/ticket/978>\\\nwhere it is reported that the \"ownerDocument\" property is extremely portable, with reference to QuirksMode at <http://www.quirksmode.org/dom/w3c_core.html#t119>\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-25T11:28:22.000-0400",
      "body": "Looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:38:17.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\\\nIE7 (Win Vista)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-25T11:49:25.000-0400",
      "body": "This fix looks fine to me.\n"
    }
  ]
}
---
Toggling Table of Contents off, throws an error

Steps to reproduce:

1\) Open the UI Options example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Open the "Easier to See" accordion panel

3\) Change the radio button selection for "Table of Contents" from "No" to "Yes"&#x20;

4\) Save and apply the changes

Notice that an error is thrown

Error: Invalid Argument\
Line: 957\
File: jquery-1.3.2.js

        