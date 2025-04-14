---json
{
  "title": "FLUID-3989",
  "summary": "Inconsistent behavior between HTML5 and Flash uploader when uploading existing files to image gallery uploader demo",
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
  "reporter": "James Yoon",
  "date": "2010-12-21T11:18:26.019-0500",
  "updated": "2010-12-21T15:09:42.263-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6/WinXP\\\nIE8/WinXP\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3989/FLUID-3989-a.patch",
      "filename": "FLUID-3989-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3989/FLUID-3989-b.patch",
      "filename": "FLUID-3989-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3989/FLUID-3989-d.patch",
      "filename": "FLUID-3989-d.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3989/uploader-flash-server-error-screenshot.png",
      "filename": "uploader-flash-server-error-screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-12-21T12:18:29.657-0500",
      "body": "I believe this inconsistency is due to a lack of error handling in the Uploader's HTML 5 strategy. Here's a patch with a rough sketch for a simple fix.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-21T12:33:35.399-0500",
      "body": "Here's a revised patch, which actually works.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-21T12:38:01.943-0500",
      "body": "Here's a screenshot of how the error appears when a user uploads the same file twice with the Flash version of the Uploader.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-21T13:05:00.187-0500",
      "body": "Here's a working patch, which enables the HTML 5 version of Uploader to handle files comparably to the Flash version.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-21T15:09:22.035-0500",
      "body": "I've reviewed the fix and Mike has tested it. We've committed patch d.&#x20;\n"
    }
  ]
}
---
To reproduce:

1\. Visit <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
2\. Upload a set of images\
3\. Upload the same set of images again\
4\. In the Flash-based uploader, the user receives a "File upload error", but in the HTML5-based uploader, the user successfully uploads the existing files.

        