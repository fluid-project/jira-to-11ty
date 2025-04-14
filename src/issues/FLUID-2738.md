---json
{
  "title": "FLUID-2738",
  "summary": "Links and Inputs under \"Easier to Find\" are left justified instead of being centred",
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
  "date": "2009-05-15T08:40:54.000-0400",
  "updated": "2009-05-21T12:49:09.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2399/",
      "key": "FLUID-2399"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-15T08:41:23.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-21T10:59:20.000-0400",
      "body": "Everything seems properly justified now, and the changes seems reasonable to me.\n\nA colon was accidentally removed from the \"Links\" label, which makes it inconsistent with the rest of the labels.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T11:03:59.000-0400",
      "body": "Reopening for the missing colon to be readded.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-21T12:49:09.000-0400",
      "body": "Missing colon has been replaced. Code reviewed this change, it was the only change made.\n\nVerified fix using:\n\nFF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Links and Inputs under "Easier to Find" are left justified instead of being centred

Steps to reproduced

1\) Open the ¨UI Options example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Open the "Easier to Find" accordion panel

Notice that the Inputs and links sections are left justified

For FF the labels and checkboxes are all left justified.

        