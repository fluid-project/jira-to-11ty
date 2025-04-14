---json
{
  "title": "FLUID-1982",
  "summary": "Uploader: after Upload stop, all delete buttons no longer function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-12-15T19:35:25.000-0500",
  "updated": "2009-01-13T10:33:20.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2010/",
      "key": "FLUID-2010",
      "summary": "Deleting uploaded files from the file queue will cause it to skip files and hang"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2020/",
      "key": "FLUID-2020",
      "summary": "Uploads stop at position where files were removed from the queue, in flash 9"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1982/FLUID-1982.a.patch",
      "filename": "FLUID-1982.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1982/FLUID-1982-swfupload.patch",
      "filename": "FLUID-1982-swfupload.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1982/FLUID-1982-uploader.patch",
      "filename": "FLUID-1982-uploader.patch"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T19:38:38.000-0500",
      "body": "onUploadComplete we need to restore the buttons to their former state.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-15T20:22:04.000-0500",
      "body": "For Infusion 0.6, we'll work around this issue by ensuring all the remove buttons are greyed out, to give the use a cue that they aren't working. In the end, this is probably okay because there is another bug that causes uploads to stall after stopping them and removing files. 😉\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:13:28.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-06T15:26:33.000-0500",
      "body": "It's possible that we could fix the underlying issue where an exception is thrown in SWFUpload's code when files are removed from its queue... don't remove anything from their queue. We'd essentially have to change the upload flow to always specify a specific file ID to upload, rather than just letting it whip through its queue one by one. A possibility to explore.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-09T13:38:43.000-0500",
      "body": "So it appears that Pausing the queue actually has nothing to do with this bug. In fact, all you have to do is remove files from the queue before you start the Upload.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-11T15:23:28.000-0500",
      "body": "Bug appears restricted to the Flash 9 version and may be an incompatibility between the 2.2.0 scripts and the old 2.1.0 version of Flash that we're using for Flash 9.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-11T23:20:16.000-0500",
      "body": "OK, I have the problem but not the fix.&#x20;\n\nThe actionScript code for CancelUpload in 2.1.0 takes a single parameter, in 2.2.0 it takes two. We're using the swfupload.js for 2.2.0 which passes two and there for it fails when passed to the Flash component. When I modified the swfupload.js file to only pass one param, it worked again.&#x20;\n\nIt appears that removing the second parameter continues to work with the 2.2.0 Flash file, since it has a default value (the value which we want). So we could modify swfupload.js. I'm not thrilled by the idea of shipping a modified version of this file but seems like the only solution.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-12T23:47:51.000-0500",
      "body": "Here's a patch for swfupload.js based on what's currently in the <https://fluidproject.atlassian.net/browse/FLUID-1982#icft=FLUID-1982> branch (r6298). I created to make it easy to apply this fix against the trunk in case Justin wants to merge this feature without having to deal with the mechanics of branch merges.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-01-12T23:48:44.000-0500",
      "body": "Here's a patch for Uploader.js based on what's currently in the <https://fluidproject.atlassian.net/browse/FLUID-1982#icft=FLUID-1982> branch (r6298). I created it to make it easy to apply this fix against the trunk in case Justin wants to merge this feature without having to deal with the mechanics of branch merges.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-13T09:53:41.000-0500",
      "body": "Double checked and tested the patches, and all is good. Justin is adding a comment on a simulateUplod() error.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T09:57:16.000-0500",
      "body": "I ran some tests, with Jacob's help (see above comment). It seems to fix this issue and <https://fluidproject.atlassian.net/browse/FLUID-2020#icft=FLUID-2020>, but does not resolve <https://fluidproject.atlassian.net/browse/FLUID-2010#icft=FLUID-2010>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T10:32:36.000-0500",
      "body": "Applied the FLUID-1982-swfupload.patch and FLUID-1982-uploader.patch files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T10:33:20.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
After beginning an upload and then canceling half way through the remove file buttons are all disabled.&#x20;

        