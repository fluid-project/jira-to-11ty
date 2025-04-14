---json
{
  "title": "FLUID-155",
  "summary": "Create a jQuery plugin for handling the tabindex attribute in a cross-browser way.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-01-01T19:16:13.000-0500",
  "updated": "2011-01-18T12:48:03.574-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-01-01T19:58:01.000-0500",
      "body": "There seems to be a problem in Opera (on both platforms) where negative tab indices return \"0\" instead of the correct value. So if you set the tabindex to -1, it will report 0 on a call to jQuery(element).tabIndex().\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-01-02T13:27:21.000-0500",
      "body": "Implemented and committed. Awaiting code review from Simon, Michelle, and Eli before forwarding along to the jQuery community.\n"
    }
  ]
}
---
It's hard to figure out if a tabindex has actually been set because of variances across browsers. A simple jQuery plugin should be written to abstract this process. Here's a thread from fluid-work documenting the various issues:

<http://fluidproject.org/pipermail/fluid-work/2007-December/001129.html>

        