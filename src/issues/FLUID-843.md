---json
{
  "title": "FLUID-843",
  "summary": "fluid.container() breaks in Internet Explorer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-06-29T10:32:31.000-0400",
  "updated": "2008-08-09T14:26:41.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-06-29T10:40:10.000-0400",
      "body": "Switched the mechanism for checking for elements to looking for nodeType.\n"
    }
  ]
}
---
fluid.container() checks to see if its argument is an Element by doing an "instanceof Element." This doesn't work in IE.

        