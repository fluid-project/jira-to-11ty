---json
{
  "title": "FLUID-1065",
  "summary": "Hover over editable text field doesnt change the cursor, using Opera 9.6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jacob Farber",
  "date": "2008-07-29T13:40:22.000-0400",
  "updated": "2011-01-14T09:53:27.556-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1065/FLUID-1605.patch",
      "filename": "FLUID-1605.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1065/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T15:24:46.000-0400",
      "body": "If you move the pointer quickly from the bottom or the top and land on the inline edit field, the pointer will change to a hand.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T09:45:58.000-0400",
      "body": "In the bSpace example (<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>) the pointer properly changes to a hand unless it is dragged over the inline edit field from the right side\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:11:06.000-0400",
      "body": "'screenshot-1' shows the improper cursor style\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T09:16:40.000-0400",
      "body": "Cursor effect now properly initialized (no longer on hover)\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T09:18:31.000-0400",
      "body": "Cursor effect is now properly initialized (no longer done on hover class)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:40:29.000-0500",
      "body": "Still evident in Opera 9.5 (Mac OS 10.5)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T12:47:56.000-0500",
      "body": "Currently only seems to be an issue with the Inline Edit Springboards.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T11:37:15.000-0400",
      "body": "My 1st Bug\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T14:39:27.566-0500",
      "body": "No longer an issue. Opera is not a supported browser in Infusion 1.3.\n"
    }
  ]
}
---
When hovering over an editable element, the cursor does not change to a hand

        