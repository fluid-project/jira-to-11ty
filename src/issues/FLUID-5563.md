---json
{
  "title": "FLUID-5563",
  "summary": "Add a blog and news section to the Fluid project website",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2014-11-19T11:24:23.542-0500",
  "updated": "2024-07-22T10:35:10.155-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-11-24T14:30:59.977-0500",
      "body": "News content has been added. However:\n\n1\\. UIO doesn't work for News\\\n2\\. Blog content hasn't been added\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2017-09-12T14:53:37.964-0400",
      "body": "Old links should also redirect properly to blog posts.\n\nExample:\n\n<http://fluidproject.org/blog/2008/07/21/about-this-and-that/>\n\nshould redirect to\n\n<https://fluidproject.org/blog/2008-07-21-about-this-and-that.html>\n\n \n"
    }
  ]
}
---
Add a blog / news section to the Docpad website. This involves:\
1\. Creating a new News template.\
2\. Adding the existing content\
3\. Updating navigation to handle the nested news content.

        