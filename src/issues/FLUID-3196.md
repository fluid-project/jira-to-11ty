---json
{
  "title": "FLUID-3196",
  "summary": "Uploader doesn't work properly in Firefox 3.5",
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
  "date": "2009-09-22T09:53:23.000-0400",
  "updated": "2011-02-28T16:47:16.289-0500",
  "versions": [
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3196/FLUID-3196-Uploader-FF35-Full.patch",
      "filename": "FLUID-3196-Uploader-FF35-Full.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3196/infusion-1.1.1-FLUID-3196.zip",
      "filename": "infusion-1.1.1-FLUID-3196.zip"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3196/infusion-1.1.1-FLUID-3196-src.zip",
      "filename": "infusion-1.1.1-FLUID-3196-src.zip"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-09-23T20:25:44.000-0400",
      "body": "Here's a nearly functional patch, but this needs a bit more work before it's ready for the bug parade.\n\n1\\. There's some pretty silly repetitive DOM fascism about how the Flash movie container is located--probably not multi instance safe as a result.\\\n2\\. When files are removed from the queue in FF 2, the transparent Flash button doesn't repoosition itself correctly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-24T09:18:36.000-0400",
      "body": "Here's a fully cross-browser, DOM agnostic version of the patch. This is attached here for discussion, as it imposes absolute positioning for all browsers, which may be a bit of an issue for some.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-25T12:08:27.000-0400",
      "body": "Here's a new patch that is significantly less brittle. Still need to get it working in IE, which will probably involve some cruft cleanup in Uploader's CSS files.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-25T12:27:53.000-0400",
      "body": "Some CSS tweaks, to remove excess padding in IE\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-25T12:43:59.000-0400",
      "body": "Since this was a paired session, I helped review the code...\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-25T13:08:53.000-0400",
      "body": "Jacob and I tested this on the client-side with the following set of Browser/Flash combinations:\n\nFirefox 3.5 | Mac, Windows | Flash 9, Flash 10\\\nIE 7           | Mac, Windows | Flash 9, Flash 10\\\nFirefox 2    | Mac, Windows  | Flash 9, Flash 10\\\nOpera        | Windows           | Flash 10\\\nSafari         | Mac, Windows  | Flash 10\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-26T17:04:33.000-0400",
      "body": "This is the full (hopefully) final patch for fixing Uploader in Firefox 3.5\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-26T17:12:53.000-0400",
      "body": "This is a complete source build of Infusion 1.1.1 with the Uploader Firefox 3.5 pre-release fix applied. Please note that while it's been tested quite a bit, this is a pre-release and hasn't gone through the full Fluid QA process yet.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-26T17:15:22.000-0400",
      "body": "This is a complete minified production build of Infusion 1.1.1 with the Uploader Firefox 3.5 fix applied. Please note that while this has been tested quite a bit, it is a pre-release and hasn't gone through a full QA process yet.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-09-26T17:31:59.000-0400",
      "body": "Victory!\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-10-02T13:30:06.000-0400",
      "body": "I've reviewed Colin Clark's changes for <https://fluidproject.atlassian.net/browse/FLUID-3114#icft=FLUID-3114> and <https://fluidproject.atlassian.net/browse/FLUID-3115#icft=FLUID-3115> and tested the code both locally and off the server using FF3.5. Looks good to me.&#x20;\n"
    },
    {
      "author": "d",
      "date": "2009-10-09T10:06:42.000-0400",
      "body": "We at Sakai are using the fluid uploader inside of a jquery ui accordion.\\\nEverything worked fine in the old version (except in firefox 3.5) but since the fix we are not able to see the swf file (which contains the browse button).\\\nSo we can not launch the browse window to select multiple files.\n\nWhen we put our html code outside of the jquery ui accordion, everything works fine.\n"
    },
    {
      "author": "d",
      "date": "2009-10-09T14:02:30.000-0400",
      "body": "I have narrowed the problem down to the following:\\\nIf the uploader is not visible on the load of the page, then the swf file isn't visible.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:47:16.287-0500",
      "body": "Closing issues that were fixed in 1.1.2\n"
    }
  ]
}
---
Uploader's underlying upload manager, SWFUpload has regressed in Firefox 3.5. As a result, it is throwing exceptions on all calls through the Flash bridge after files have been added to the queue.

I've tracked this down to SWFUpload's famous sensitivity about DOM manipulation. It appears that if the Flash browse button is located anywhere near elements in the DOM that are manipulated, or is manipulated itself, the Flash bridge breaks.

The solution to this is to move the Flash browse button outside of the Uploader container into a location where it is isolated.

        