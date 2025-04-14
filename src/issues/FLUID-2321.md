---json
{
  "title": "FLUID-2321",
  "summary": "Page links are displayed vertically instead of horizontally: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-03-09T09:17:28.000-0400",
  "updated": "2009-03-23T16:18:44.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2321/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-09T09:17:55.000-0400",
      "body": "'screenshot-1' shows the page links displayed vertically\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:05:52.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-17T14:05:51.000-0400",
      "body": "Commented out the table cells used for alignment, used some floats in overrides.css to put it on one line.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-20T16:53:16.000-0400",
      "body": "I've chatted with Jacob about this. The fix looks good, but the commented-out tables in the sample HTML should actually be removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T09:11:02.000-0400",
      "body": "The commented out code should be removed\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-23T16:07:20.000-0400",
      "body": "The commented code has been removed, and the HTML looks lovely now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-23T16:18:44.000-0400",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5, Win XP)&#x20;\n"
    }
  ]
}
---
Page links are displayed vertically instead of horizontally: using FF2

<http://build.fluidproject.org/fluid/sample-code/pager/sakai-site-setting/site_setting_members.html>

Notice that the page links are displayed vertically instead of horizontally

        