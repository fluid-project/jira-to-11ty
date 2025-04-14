---json
{
  "title": "FLUID-2219",
  "summary": "Clean up Uploader code for 0.8 release",
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
  "reporter": "Justin Obara",
  "date": "2009-02-11T08:52:04.000-0500",
  "updated": "2009-02-16T22:30:10.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2219/FLUID-2219.patch",
      "filename": "FLUID-2219.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2219/FLUID-2219b.patch",
      "filename": "FLUID-2219b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-11T08:52:28.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-12T18:19:33.000-0500",
      "body": "Here's a patch with the removal of the Gears-related code from uploader, as well as a tweak to one test that was using the Gears code.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-02-12T18:26:09.000-0500",
      "body": "I've reviewed the patch and the results. Looks good to go.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T10:41:08.000-0500",
      "body": "added an updated patch (FLUID-2219b.patch), adding the removal of the gears related js files from the head of DemoUploadManager-test.html. Leaving these script tags in, causes errors in Opera.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T20:57:22.000-0500",
      "body": "I've reviewed Justin's patch, extended it to also remove this files from Uploader.html, and will commit.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-02-16T21:06:06.000-0500",
      "body": "I've removed Gears-related code from trunk. You can still see it in action in the uploader2 directory of the sandbox.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-16T22:30:10.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2, Opera 9.5, Safar 3.1 (Mac OS 10.5)\\\nIE 6, FF3 (Win XP)\n"
    }
  ]
}
---
Clean up Uploader code for 0.8 release

* necessary refactoring of code
* removal of gears related files

        