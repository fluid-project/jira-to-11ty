---json
{
  "title": "FLUID-4445",
  "summary": "Server uploader demo doesn't degrade to single-file when no flash",
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
  "reporter": "heidi valles",
  "date": "2011-09-13T11:57:15.368-0400",
  "updated": "2011-09-23T17:25:35.992-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE8, Win XP\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4444/",
      "key": "FLUID-4444",
      "summary": "Uploader is a blank screen when no flash installed"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4445/IE6-noFlash.png",
      "filename": "IE6-noFlash.png"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-09-15T16:28:38.620-0400",
      "body": "Attached a screen shot \"IE6-noFlash.png\" of how the image gallery looks like in IE6 when the flash is uninstalled but active scripting is enabled. Instead of having the single file uploader displayed, a broken multi-file uploader shows up.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-09-20T14:17:29.836-0400",
      "body": "Sent a pull request: <https://github.com/fluid-project/image-gallery/pull/1>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-09-23T17:25:29.333-0400",
      "body": "I tested and pushed Cindy's changes to the master image-gallery repository. <https://github.com/fluid-project/image-gallery/pull/1>\n\nI made one minor tweak to the casing of the eventOpts variable.\n"
    }
  ]
}
---
<http://build.fluidproject.org/image-gallery/image-gallery.php>  looks broken when no flash installed. Should be single-file uploader.

        