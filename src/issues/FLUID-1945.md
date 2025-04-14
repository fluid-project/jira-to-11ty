---json
{
  "title": "FLUID-1945",
  "summary": "Need appropriate demo pages for dropdown and rich text inline edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-12-08T13:44:33.000-0500",
  "updated": "2011-01-14T11:54:51.687-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1944/",
      "key": "FLUID-1944",
      "summary": "Need to merge dropdown and rich text inline edit into the inline edit component"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v2.txt",
      "filename": "FLUID-1945_patch_v2.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v3.txt",
      "filename": "FLUID-1945_patch_v3.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v4.txt",
      "filename": "FLUID-1945_patch_v4.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v5.txt",
      "filename": "FLUID-1945_patch_v5.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v6.txt",
      "filename": "FLUID-1945_patch_v6.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch_v7.txt",
      "filename": "FLUID-1945_patch_v7.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1945/FLUID-1945_patch.txt",
      "filename": "FLUID-1945_patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T12:04:06.000-0500",
      "body": "If the appropriate demos don't get created in time for 0.6, then at a minimum, the title of the drop-down sample page needs to be fixed (a very  minor HTML change).\n"
    },
    {
      "author": "y z",
      "date": "2009-05-15T14:18:49.000-0400",
      "body": "patch for the issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-16T20:23:36.000-0400",
      "body": "There is some refactoring needed in the patch (see below)\n\n1\\) Some of the \\<scripts> are loaded in the wrong order\n\n2\\) Don't need to use $(document).ready inside the js file\n"
    },
    {
      "author": "y z",
      "date": "2009-05-19T15:56:31.000-0400",
      "body": "Updated the patch for the issue:\n\n* removed unnecessary $(document).ready\n* arranged the scripts insertion in the right order\n"
    },
    {
      "author": "y z",
      "date": "2009-05-19T16:02:14.000-0400",
      "body": "This patch (v3) will work with the tiny\\_mce moved to the CDN on <http://fltinymce.appspot.com/>\\\nfckeditor does not support the 3rd party domains at least untill 3.x so it is left intact.\n"
    },
    {
      "author": "y z",
      "date": "2009-05-21T12:19:38.000-0400",
      "body": "Latest patch that has all extra examples added :\\\n-HC theme example\\\n-stand alone fckerditor, tiny\\_mce examples\\\n-stand alone simple editor's examples\\\ntiny\\_mce works from CDN\n"
    },
    {
      "author": "y z",
      "date": "2009-05-21T16:08:22.000-0400",
      "body": "* added undo functionality (including customisation) to all inline edits\n* removed old inline edit tests from quick start examples and manual tests\n* moved new code to quick start examples\n"
    },
    {
      "author": "y z",
      "date": "2009-05-22T12:01:48.000-0400",
      "body": "latest inline text editor demo patch:\n\n* some refactoring done in .js file\n* removed redundant class from css\n* fixed IE bug\n"
    },
    {
      "author": "y z",
      "date": "2009-05-22T14:36:35.000-0400",
      "body": "final refactoring\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-22T16:52:05.000-0400",
      "body": "Committed Yura's patch (version 7) with a few modifications. 1) didn't remove the manual tests for inline edit at this time, will review this page for removal at a later date. 2) changed the names of the files in the quickstart examples to be InlineEdit, instead of inline-edit, and 3) removed a left over css reference to the selectbox.css\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-22T16:55:27.000-0400",
      "body": "Forgot that dropdown didn't make it into this patch as there is a bug with the css from the selectbox that has to get worked out first.\n"
    }
  ]
}
---
Need appropriate demo pages for dropdown and rich text inline edit

This will require a decision on where to place FCKEdit and TinyMCE

        