---json
{
  "title": "FLUID-2303",
  "summary": "Use @aria-labelledby in the main thumbnail <div> to reference the thumbnail title as its alternative text.",
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
  "date": "2009-03-02T11:41:36.000-0500",
  "updated": "2009-03-19T10:25:58.000-0400",
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
      "date": "2009-03-12T14:54:54.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2009-03-19T10:25:43.000-0400",
      "body": "Viewed the markup generated for three demos on the Fluid build site noting that :\\\n(1) the relevant markup within image reorderer has been modified as appropriate, and\\\n(2) the relevant markup has **not** changed for the the portlet reorderer, nor the sortable tabs examples.\n\nThe demos:\n\n* \"Standalone Image Reorderer demonstration\" \\\n  &#x20;   <http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>\n* \"Demo uPortal site\"\\\n  &#x20;   <http://build.fluidproject.org/uPortal/render.userLayoutRootNode.uP;jsessionid=3393BFC3272C7EBCBBA0CCED6D07CEB3>\n* \"Sortable jQuery tabs example\"\\\n  &#x20;   \\[<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>\"\n\nTested in FF2/FF3 (OS X), IE8beta and Safari 4beta (WinXP).\n"
    }
  ]
}
---
In the ARIA spec, when a \<div> is marked with @role="img", the advice is to use the "aria-labelledby" property to provide alternative text.  The value of "aria-labelledby" is an IDREF of another element that contains the label.  For the image reorderer, that would be the link element whose text is used as the title of the thumbnail.

See the second bullet point and first markup example under the "presentation" role of the ARIA spec (currently, last call draft):\
<http://www.w3.org/TR/wai-aria/#presentation>

        