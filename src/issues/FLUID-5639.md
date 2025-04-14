---json
{
  "title": "FLUID-5639",
  "summary": "404 error page has hardcoded path to CSS and Favicon which breaks self-contained nature of the source",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jonathan Hung",
  "date": "2015-04-20T15:02:24.030-0400",
  "updated": "2022-03-14T12:43:41.880-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:43:41.869-0400",
      "body": "This doesn't appear to be causing any issues with the current 11ty based site hosted on netlify.\n"
    }
  ]
}
---
The 404.html page in the Infusion Docs has a hard coded path to the favicon and the fluid-docs.css file. This allows the 404 page to look proper when served from the docs.fluidproject.org domain, but this breaks the self-contained nature of the source which doesn't assume any paths (everything should be relative).

The core issue is that github delivers the 404.html page in place of the requested document. If a relative path is used in the 404.html file, the path is relative to the requested document, not the 404.html file located in the root. It is this same reason the 404.html page links to a CDN version of Foundation and not the local copy.

        