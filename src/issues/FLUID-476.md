---json
{
  "title": "FLUID-476",
  "summary": "Move any non-sample test markup out of the sample-code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2008-04-08T16:17:43.000-0400",
  "updated": "2011-01-30T12:05:55.339-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-18T10:45:47.000-0400",
      "body": "The sample code now includes:\\\nabstract:\n\n* portal examples\\\n  concrete:\n* todo list\n* generic lightbox (multiple keysets **are** now supported, though, but this file will serve as a cut-paste source for Lightbox implementations, simpler than the template file)\n* jquery tabs (this replaces the uPortal sortable tabs example)\n* uPortal sortable portlets (updated, and includes the Lightbox in a portlet, showing nested reorderers)\n* scheduler (the RSFStyleScheduler has been removed)\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:27:49.000-0400",
      "body": "Re abstract portlets example: Either use the test markup for this purpose (make it display, and ensure that the tests clean up after themselves) or move it out of sample code and into tests somewhere.\n\nRe generic lightbox: Ensure that it is indeed nice and clean.\n\nRe scheduler: What does this offer that the to-do list doesn't?\n\nRe unordered-list-tabs: No longer necessary given the jQuery tabs example? Add a welcome tab to the tabs example with the intructions, and move this one out.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T15:37:41.000-0400",
      "body": "Done.\n"
    }
  ]
}
---
Any markup examples that are solely for testing purposes, and which don't serve as exemplars or QA test files, should be moved out of the sample-code folder and into tests somehow. The only thing in the sample-code should be:

* todo list
* generic lightbox (until that is merged into the template, once multiple key-sets are supported)
* uPortal sortable tabs
* uPortal sortable portlets
* nested reorderers

        