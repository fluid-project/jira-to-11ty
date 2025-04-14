---json
{
  "title": "FLUID-2301",
  "summary": "Use @role=\"img\" for main thumbnail <div>.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2009-03-02T11:33:53.000-0500",
  "updated": "2009-03-19T10:25:02.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:54:32.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-19T10:24:51.000-0400",
      "body": "Viewed the markup generated for three demos on the Fluid build site noting that :\\\n(1) the relevant markup within image reorderer has been modified as appropriate, and\\\n(2) the relevant markup has **not** changed for the the portlet reorderer, nor the sortable tabs examples.\n\nThe demos:\n\n* \"Standalone Image Reorderer demonstration\" \\\n  &#x20;   <http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>\n* \"Demo uPortal site\"\\\n  &#x20;   <http://build.fluidproject.org/uPortal/render.userLayoutRootNode.uP;jsessionid=3393BFC3272C7EBCBBA0CCED6D07CEB3>\n* \"Sortable jQuery tabs example\"\\\n  &#x20;   \\[<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\"\n\nTested in FF2/FF3 (OS X), IE8beta and Safari 4beta (WinXP).\n"
    }
  ]
}
---
There is an "img" role in ARIA.  Back in the day, the thumbnails for the image reorderer were marked @role="gridcell", which is/was fairly uninformative.  A role value of "img" is close to communicating to users that these graphics are thumbnails.

The spec for the 'img' role is (currently, last call draft):\
<http://www.w3.org/TR/wai-aria/#img>

        