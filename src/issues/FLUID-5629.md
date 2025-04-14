---json
{
  "title": "FLUID-5629",
  "summary": "Infusion docs reference missing Fluid Project blog posts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2015-04-17T08:12:15.473-0400",
  "updated": "2024-08-01T07:00:32.496-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "YashJipkate",
      "date": "2020-03-01T01:03:57.627-0500",
      "body": "I think this is because the URLs are now different. But the pages (in the given example - DeclarativeThisismInIoC.html) are still present. So they are essentially not destroyed. Like the page is now on <https://docs.fluidproject.org/infusion/development/DeclarativeThisismInIoC.html>.\n\nDoes this mean that the blog posts are restored? Or is there something I am missing?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-03-02T08:00:44.193-0500",
      "body": "From the description of the issue, it sounds like these posts used to live with another site and have now been moved to the docs. We may just need to validate all the URLs in the docs site to make sure they are pointing at the correct locations.\n"
    },
    {
      "author": "YashJipkate",
      "date": "2020-04-08T16:25:18.290-0400",
      "body": "The link checker tests are passing on the master branch. And any page that could have given 404 would be caught by the test. So, I think it is safe to assume that the links are all pointing to valid locations. \n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-08-01T07:00:16.525-0400",
      "body": "Merged [PR #269](https://github.com/fluid-project/infusion-docs/pull/269)\n"
    }
  ]
}
---
The Infusion Docs sometimes reference Blog posts on the Fluid website. For example:\
<http://docs.fluidproject.org/infusion/latest/DeclarativeThisismInIoC.html>

Since the redesign of the Fluid Project website, the blog posts have not been restored. So these links from the docs will give a 404 at the Fluid Project site.

The blog posts should be restored.

        