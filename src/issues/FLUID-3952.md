---json
{
  "title": "FLUID-3952",
  "summary": "In Firefox 3.6, the HTML 5 strategy for Uploader sends an invalid multipart request, causing uploads to fail in PHP",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Colin Clark",
  "date": "2010-12-17T18:46:26.684-0500",
  "updated": "2010-12-20T16:22:54.873-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3952/FLUID-3952.patch",
      "filename": "FLUID-3952.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-17T18:52:11.235-0500",
      "body": "I've committed a simple server debugging script written in PHP by Cindy, which is very helpful in debugging Upload issues with the server. It's located in the scratchpad: <https://source.fluidproject.org/svn/scratchpad/uploader/simple-server-debug>\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-20T10:12:58.314-0500",
      "body": "Removed a space in the multi-part request so that the Uploader will upload files properly to PHP-based servers in FF 3.6\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-20T15:46:08.083-0500",
      "body": "Yep, the patch indeed removes the invalid leading space. Reviewed and ready to commit.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-20T16:22:54.764-0500",
      "body": "I committed MIke's patch at r10443 after Michelle reviewed it.\n"
    }
  ]
}
---
On line 202 of HTML5UploaderSupport.js, in the generateMultipartContent() method, we hand roll our own multipart request to send via XHR. However, we mistakenly start the the message with a single whitespace character (" "), which is not a valid. This causes an the request to be ignored as malformed by PHP.

The fix is super easy: just remove the space at line 202, and suddenly PHP likes us again.

        