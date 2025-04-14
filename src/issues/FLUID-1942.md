---json
{
  "title": "FLUID-1942",
  "summary": "Prepare progressive enhancement-related code for release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-12-08T11:58:58.000-0500",
  "updated": "2008-12-10T09:12:43.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1942/FLUID-1942.patch",
      "filename": "FLUID-1942.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T12:06:14.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-08T17:24:44.000-0500",
      "body": "Here's a patch that does the following:\n\n1\\. Removes the minified version of swfobject.js in favour of the unminified version\\\n2\\. Updates the build scripts to copy the correct licenses and include ProgressiveEnhancement.js along with swfobject.js\\\n3\\. Fixes a minor bug in the order of library inclusion in Fluid-all.js\\\n4\\. Removes swfupload.swfobject.js, which is not used in Uploader 2\\\n5\\. License renaming for swfuploader and swfobject\n\nApologies for the size of this patch, but you'll notice that the vast majority of it is the addition and removal of the swfobject files.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-10T09:10:21.000-0500",
      "body": "Quote from Antranig's code reivew comment on the fluid-work list\n\n\"Hi there - I have looked at this patch, and it appears benign to me.\n\nCheers,\\\nA.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-10T09:11:09.000-0500",
      "body": "Verified fix.\n\nTested no js condition using \\\nFF2 and FF3 (Win XP)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-10T09:11:28.000-0500",
      "body": "re-openned issue to edit a comment\n"
    }
  ]
}
---
A couple of little tasks to ensure that the recent progressive enhancement-related code is ready for release:

* link against an unminified version of swfobject.js\
  \*remove the unused swfupload-swfobject.js file
* ensure that the licenses are correctly articulated
* update the build scripts to include swfobject.js and ProgressiveEnhancement.js

        