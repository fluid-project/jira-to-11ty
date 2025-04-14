---json
{
  "title": "FLUID-2302",
  "summary": "Use @role=\"presentation\" and @alt=\"\" for the <img> element within the main thumbnail <div>.",
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
  "date": "2009-03-02T11:37:39.000-0500",
  "updated": "2009-03-19T10:25:28.000-0400",
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
      "date": "2009-03-12T14:54:45.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-19T10:25:18.000-0400",
      "body": "Viewed the markup generated for three demos on the Fluid build site noting that :\\\n(1) the relevant markup within image reorderer has been modified as appropriate, and\\\n(2) the relevant markup has **not** changed for the the portlet reorderer, nor the sortable tabs examples.\n\nThe demos:\n\n* \"Standalone Image Reorderer demonstration\" \\\n  &#x20;   <http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>\n* \"Demo uPortal site\"\\\n  &#x20;   <http://build.fluidproject.org/uPortal/render.userLayoutRootNode.uP;jsessionid=3393BFC3272C7EBCBBA0CCED6D07CEB3>\n* \"Sortable jQuery tabs example\"\\\n  &#x20;   \\[<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\"\n\nTested in FF2/FF3 (OS X), IE8beta and Safari 4beta (WinXP).\n"
    }
  ]
}
---
The "presentation" role in the ARIA spec contains a use case where an \<img> element (or elements) is within a containing \<div> that is marked with @role="img".  In that case, the contained \<img> is considered presentational in order to avoid publishing the same a11y information twice to the a11y API.&#x20;

The spec for the 'presentation' role value is (currently, last call draft):\
<http://www.w3.org/TR/wai-aria/#presentation>

The second bullet point is the relevant one, as well as the first markup example within the section on the "presentation" role.

        