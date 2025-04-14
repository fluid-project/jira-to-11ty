---json
{
  "title": "FLUID-1311",
  "summary": "Non-standard character/symbol not displayed while in edit mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-08-26T11:31:22.000-0400",
  "updated": "2008-11-07T13:17:47.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-885/",
      "key": "FLUID-885",
      "summary": "Font styling displayed differently in edit vs non-edit mode"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1311/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1311/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:32:26.000-0400",
      "body": "'screenshot-1' shows the inline edit field in edit mode. Notice that the star is not displayed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-26T11:33:03.000-0400",
      "body": "'screenshot-2' shows the inline edit field out of edit mode. Notice that the star is displayed\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:17:47.000-0500",
      "body": "A text input field is a native OS/browser component, and therefore its visual rendering is outside the scope of the framework.\n"
    }
  ]
}
---
Non-standard character/symbol not displayed while in edit mode.

Steps to reproduce:

1\) Open either of the inline edit examples from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Copy and paste a non-standard character/symbol (<http://www.alanwood.net/unicode/miscellaneous_symbols.html>) into an inline edit field. Notice that the symbol is not displayed while in edit mode, but is displayed when not in edit mode.

        