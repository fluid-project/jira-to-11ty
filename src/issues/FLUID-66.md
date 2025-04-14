---json
{
  "title": "FLUID-66",
  "summary": "Need to call jQuery.noConflict() to better insure that jQuery's $ object does not conflict with that of other toolkits.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-10-22T16:39:37.000-0400",
  "updated": "2007-11-14T17:36:17.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
jQuery defines a $ object that is a short-form of jQuery() itself.  Some other toolkits also define a $ object.  To insure that the Reoderer's use of  jQuery does not conflict with other toolkits' definition of $, for example in a portal, one must initialize the Reorderer with a call to jQuery.noConflict().

Note, that it is unclear where this call must happen.

Also, it is good idea to simply use jQuery() instead of $() in the Reorderer code.

        