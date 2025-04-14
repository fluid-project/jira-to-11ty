---json
{
  "title": "FLUID-2304",
  "summary": "Use @role=\"img\", @role=\"presentation\", and @aria-labelledby in image reorderer markup",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2009-03-02T11:42:50.000-0500",
  "updated": "2009-03-19T10:26:21.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:54:22.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-17T14:35:03.000-0400",
      "body": "Fixed at revision 6763. ImageReorderer.js refactored a bit to conform to newer framework idioms\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-18T13:30:07.000-0400",
      "body": "I've reviewed the changes for this. The new attributes are nicely in place, and the code has also been updated to make proper use of the framework.\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-19T10:26:21.000-0400",
      "body": "Viewed the markup generated for three demos on the Fluid build site noting that :\\\n(1) the relevant markup within image reorderer has been modified as appropriate, and\\\n(2) the relevant markup has **not** changed for the the portlet reorderer, nor the sortable tabs examples.\n\nThe demos:\n\n* \"Standalone Image Reorderer demonstration\" \\\n  &#x20;   <http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>\n* \"Demo uPortal site\"\\\n  &#x20;   <http://build.fluidproject.org/uPortal/render.userLayoutRootNode.uP;jsessionid=3393BFC3272C7EBCBBA0CCED6D07CEB3>\n* \"Sortable jQuery tabs example\"\\\n  &#x20;   \\[<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\"\n\nTested in FF2/FF3 (OS X), IE8beta and Safari 4beta (WinXP).\n"
    }
  ]
}
---
Meta-issue for linking three markup subtasks related to adding ARIA roles and states for the thumbnails in the image reordere as currently specified in the last call ARIA draft.

        