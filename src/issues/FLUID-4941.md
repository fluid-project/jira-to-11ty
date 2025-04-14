---json
{
  "title": "FLUID-4941",
  "summary": "Infusion's event system throws an error when Prototype.js is included in a web page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2013-03-21T15:57:14.956-0400",
  "updated": "2014-04-04T15:22:45.479-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "All browsers\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4028/",
      "key": "FLUID-4028",
      "summary": "Event firer iterates through listeners using for..in in array case"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2013-03-21T16:13:03.372-0400",
      "body": "This issue is fixed in the current Infusion master branch and will be released along with Infusion 1.5 (or whatever version it ends up being).\n"
    }
  ]
}
---
Prototype.js is still doing shady things with the prototypes of built-in types such as Array. In particular, it extends Array.prototype by adding an "each" method to it.

In Infusion 1.4's implementation of fireToListeners (defined inside fluid.event.getEventFirer), we use a for..in statement to iterate over the keys in an Array. This statement does not filter based on hasOwnProperty, and as a result will include Prototype's each property in the keys it operates on.

The fix is to use a regular for statement to iterate over values in the array of listeners rather than not use for..in.

This issue has been fixed in master, but is causing problems for uPortal users who want to include Prototype.js in their portlets.

        