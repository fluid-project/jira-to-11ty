---json
{
  "title": "FLUID-2757",
  "summary": "Wrap all tutorial code in an anonymous closure to demonstrate how to keep code private",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Laurel Williams",
  "date": "2009-05-21T13:50:51.000-0400",
  "updated": "2011-03-17T14:48:57.580-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "all\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-01-10T14:17:35.724-0500",
      "body": "All of our demos (which are the basis for our tutorials now) all use this closure form.\n"
    }
  ]
}
---
Add namespacing anonymous function to tutorial code\
(function ($, fluid) {\
// code\
})(jQuery, fluid);

        