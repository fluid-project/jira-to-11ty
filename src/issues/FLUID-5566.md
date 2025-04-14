---json
{
  "title": "FLUID-5566",
  "summary": "Place redirects for often-linked pages which no longer exist",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2014-11-20T08:39:07.238-0500",
  "updated": "2015-12-14T08:30:27.700-0500",
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
      "date": "2015-12-14T08:30:27.698-0500",
      "body": "This has been addressed using the docpad redirector plugin which uses meta refresh redirects.\n"
    }
  ]
}
---
Place redirects for prominent Fluid Project pages which no longer exist.

* Look through the wiki and find out possibly which pages to redirect
* instead of redirecting to the home page, perhaps scrape the SQL dump and produce a page? Maybe an archive section for orphaned content.

        