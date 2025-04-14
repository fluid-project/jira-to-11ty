---json
{
  "title": "FLUID-3937",
  "summary": "In Firefox 3.6, the HTML 5 strategy for Uploader loads files into memory instead of streaming to the server, causing the potential for browser crashes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-12-17T11:49:19.057-0500",
  "updated": "2010-12-20T16:24:18.342-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3937/FLUID-3937-b.patch",
      "filename": "FLUID-3937-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-20T15:46:22.189-0500",
      "body": "Here's a patch from Mike and I, which adds an additional \"legacyBrowserFileLimit\" option to the HTML 5 strategy so that users can cap file sizes selectively for Firefox 3.6.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-20T16:01:33.074-0500",
      "body": "The patch looks good - you can commit.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-20T16:23:37.994-0500",
      "body": "Fix committed at r10444.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-20T16:24:18.333-0500",
      "body": "Fixed, tested and committed.\n"
    }
  ]
}
---
Firefox 3.6 only has partial support for HTML 5 multi file uploads. As a result, we are required to use the File API's .getAsBinary() method to load the entire file into browser memory before uploading it to the server.

This approach has the potential to cause crashes in browsers with large file sizes or in low memory situations. The bug itself is in Firefox's implementation, but we need to add some kind of sensible file size cap for users of Firefox 3.6 so that we don't end up crashing their browser.

        