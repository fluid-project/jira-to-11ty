---json
{
  "title": "FLUID-892",
  "summary": "Not enough focus contrast for Uploader in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Jonathan Hung",
  "date": "2008-07-11T17:52:45.000-0400",
  "updated": "2009-06-08T13:42:59.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5",
    "0.8",
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE 7 (Win XP, Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2559/",
      "key": "FLUID-2559"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-663/",
      "key": "FLUID-663"
    },
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-892/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-892/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:12:45.000-0400",
      "body": "'screenshot-1' shows the focus styling in FF.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:16:15.000-0400",
      "body": "'screenshot-2' shows the focus styling in IE 7\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:16:44.000-0400",
      "body": "This affects Uploader 2\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-18T15:17:16.000-0400",
      "body": ":focus pseudo class not supported in IE - this requires an explicit class applied on focus to give it some effect.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T13:37:20.000-0400",
      "body": "Fixed in Uploader1 but not yet fixed in Uploader 2. The styles have been added but the code is not in place.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-06-08T13:42:59.000-0400",
      "body": "Appears to be fixed. Confirmed in IE7.\n"
    }
  ]
}
---
Focus style is not obvious on IE7. In FF, you get a nice thick border, but in IE7, you only see the default thin dotted focus border.

        