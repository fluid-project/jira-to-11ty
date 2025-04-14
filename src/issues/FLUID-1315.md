---json
{
  "title": "FLUID-1315",
  "summary": "Replacing the content of an inline edit field with a space character removes the inline edit field: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2008-08-27T10:51:20.000-0400",
  "updated": "2009-08-12T16:14:39.000-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Safari 3 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-2018/",
      "key": "FLUID-2018"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1330/",
      "key": "FLUID-1330",
      "summary": "inline edit - control chars make field \"disappear\""
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1315/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1315/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-27T10:52:57.000-0400",
      "body": "'screenshot-1' shows the original format of the inline edit field\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-27T10:54:07.000-0400",
      "body": "'screenshot-2' shows the inline edit field removed after entering a single space character as the value. Notice how the spacing for the inline edit field is removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-30T17:01:07.000-0400",
      "body": "Appears to be fixed with changes made to the bSpace example. May be it had to do with changing the button from an icon to text.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-08-10T14:02:39.000-0400",
      "body": "This issue is still happening in Safari 3 on Mac OS 10.5. I see it in the Quick Start page, bSpace example and the Announcements example.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-11T13:48:51.000-0400",
      "body": "Updated the environments\n"
    }
  ]
}
---
Replacing the content of an inline edit field with a space character removes the inline edit field.

Steps to reproduce:

1\) Open the bSpace demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Replace the contents of one of the inline edit fields with a space character. Notice that the inline edit field and the spacing for it has been removed. You are able to click the undo button to bring the field back.

        