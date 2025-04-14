---json
{
  "title": "FLUID-5840",
  "summary": "Page redirects are not redirecting to proper pages on fluidproject.org",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2016-01-14T07:33:42.157-0500",
  "updated": "2016-07-08T09:06:12.239-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The fluidproject.org website is no longer redirecting old pages to their destinations. For example:

<http://fluidproject.org/products/infusion> should redirect to /infusion.html but it does not.

The redirects are handled with the redirect plugin in docpad and is configured in the docpad.coffee file.

        