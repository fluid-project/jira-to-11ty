---json
{
  "title": "FLUID-3752",
  "summary": "Redesign and implement the inlineEdit component demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Justin Obara",
  "date": "2010-09-22T18:06:40.576-0400",
  "updated": "2010-12-01T16:56:16.033-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/FLUID-3752-namespacing.patch",
      "filename": "FLUID-3752-namespacing.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/Inline-Edit-03.png",
      "filename": "Inline-Edit-03.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/inlineEditDemoCSS.txt",
      "filename": "inlineEditDemoCSS.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/inlineEditDemoCSSCleanup.txt",
      "filename": "inlineEditDemoCSSCleanup.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/inlineEditDemoPatch.txt",
      "filename": "inlineEditDemoPatch.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/inlineEditDemoPatch2.txt",
      "filename": "inlineEditDemoPatch2.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/pencil.jpg",
      "filename": "pencil.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/red-car.jpg",
      "filename": "red-car.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/redo.jpg",
      "filename": "redo.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3752/undo.jpg",
      "filename": "undo.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:01:04.608-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-05T15:38:37.486-0400",
      "body": "New design for inline edit.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T10:22:09.196-0400",
      "body": "Renaming jhung's images\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T10:26:02.135-0400",
      "body": "New inline edit demo.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T13:53:59.067-0400",
      "body": "Moved images into image folder within demos directory.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-07T14:42:26.383-0400",
      "body": "wireframe\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-07T15:50:33.925-0400",
      "body": "Code refactoring:   Move html markup into a CSS file\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-10-08T11:04:51.515-0400",
      "body": "Css cleanup\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-08T15:00:27.005-0400",
      "body": "Committed Mike's patch ( inlineEditDemoCSSCleanup.txt ) which re-implements the inline edit demo based on the latest designs.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T12:00:34.064-0400",
      "body": "Missing instructions to demo portal.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-12T12:35:22.420-0400",
      "body": "Added instructions.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-10-13T13:48:32.169-0400",
      "body": "1\\. Mouse interaction\\\n2\\. Keyboard interaction\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:04:04.754-0500",
      "body": "There are a couple things which should be done before we close this issue:\n\n1\\) The simple text demo contains initInlineEdit which is simply a wrapper for inlineSimpleEditSetup. We should just rename inlineSimpleEditSetup and get rid of initInlineEdit. \\\n2\\) The CSS selectors being used in the demos (both simple and rich text) should be namespaced with 'demo'\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:07:09.238-0500",
      "body": "Making this issue a blocker because it didn't pass code review and reverting the code will be a lot more work then fixing the issues that came up during code review.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-29T11:30:18.426-0500",
      "body": "Changed namespacing of demo styles.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-12-01T16:56:16.029-0500",
      "body": "Code reviewed and committed\n"
    }
  ]
}
---

        