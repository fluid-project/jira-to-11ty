---json
{
  "title": "ENGAGE-496",
  "summary": "Dynamic loading of jquery ui scripts on Safari fails",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-03-05T13:37:52.000-0500",
  "updated": "2010-03-09T14:45:43.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-494/",
      "key": "ENGAGE-494"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-434/",
      "key": "ENGAGE-434",
      "summary": "Implement \"All in one page\" portalised solution to remedy performance issues in Engage on mobile devices"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-496/ENGAGE-496-core.patch",
      "filename": "ENGAGE-496-core.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-496/ENGAGE-496-kettle.patch",
      "filename": "ENGAGE-496-kettle.patch"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-03-05T14:58:06.000-0500",
      "body": "Fixes for synchronisation under Safari applying the CONTINUATION-PASSING STYLE OF EVALUATION!!\n"
    }
  ]
}
---
As part of the work on ENGAGE-434, the "standard" methods of injecting \<script> tags into \<head> on Safari have been discovered to be not reliable. It appears that even the method in jQuery.globalEval (proposed by Giammarchi) does not succeed in being synchronous, as well as not causing the sources to be visibile in the debugger. This is a blocker for Engage since loading jquery.ui.core and jquery.ui.dialog in succession repeatably results in a broken image, causing the send dialog in myCollection to fail.

        