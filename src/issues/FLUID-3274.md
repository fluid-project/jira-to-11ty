---json
{
  "title": "FLUID-3274",
  "summary": "Download button is not visible: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-10-09T11:19:29.000-0400",
  "updated": "2009-10-20T10:49:09.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Safari 4 (Mac OS 10.4, 10.5)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3235/",
      "key": "FLUID-3235",
      "summary": "Infusion builder styling  "
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3275/",
      "key": "FLUID-3275"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3274/FLUID-3274.patch",
      "filename": "FLUID-3274.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3274/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-10-09T11:20:45.000-0400",
      "body": "'screenshot-1' shows that the download button is missing\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-09T11:53:11.000-0400",
      "body": "I attached a patch to force the right color scheme on the button\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T15:10:48.000-0400",
      "body": "I've reviewed the change and it seems sensible. Still waiting to hear from Laurel about its efficacy, but assuming it tests out, I vote +1 on this change.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T17:25:33.000-0400",
      "body": "Laurel and Justin tested this fix on all of our A-Grade browsers and it works just fine. Jacob committed the fix at r8304\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T17:25:58.000-0400",
      "body": "This one has been fixed by an update to the Builder CSS at r8304\n"
    }
  ]
}
---
Download button is not visible

Steps to reproduce:

1\) Open the builder page

Notice that there does not appear to be a download button.

        