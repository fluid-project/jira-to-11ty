---json
{
  "title": "FLUID-1026",
  "summary": "Styling issue when scrollbar appears, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-24T20:31:34.000-0400",
  "updated": "2008-09-19T14:05:45.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 6 (Win XP, Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-642/",
      "key": "FLUID-642",
      "summary": "File Upload: IE: Borders on file queue don't draw correctly"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1026/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-24T20:32:35.000-0400",
      "body": "'screenshot-1' shows the errors with the styling around the scrollbar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:17:32.000-0400",
      "body": "this affects Uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-17T20:07:53.000-0400",
      "body": "changed the CSS so that the Uploader will no longer push out of it's rectangle on IE6\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:11:36.000-0400",
      "body": "Verified fix using:\n\nIE 6 (Win XP, Win 2000)\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-18T14:18:52.000-0400",
      "body": "This was fixed in Uploader2, should roll code into Uploader1 for 0.5\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T11:58:47.000-0400",
      "body": "Fixes from Uploader2 applied to Uploader1 for 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T14:05:45.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
When the scroll bar appears in uploader, the styling does not display properly.

Steps to reproduce:

1\) Open either version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>&#x20;

2\) Add enough files that the scrollbar is displayed, notice the styling under the scrollbar

        