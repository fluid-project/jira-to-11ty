---json
{
  "title": "FLUID-1630",
  "summary": "Right border of focus styling for unedited inline edit fields are missing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-26T11:34:27.000-0400",
  "updated": "2011-01-06T12:47:07.503-0500",
  "versions": [
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
    "Inline Edit"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1630/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-26T11:35:06.000-0400",
      "body": "'screenshot-1' shows the border missing on the right\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T11:07:59.000-0400",
      "body": "My 1st Bug\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T12:47:07.501-0500",
      "body": "Likely a styling issue isolated to this demo. This demo has since been removed. Closing.\n"
    }
  ]
}
---
Right border of focus styling for uneditted inline edit fields are missing.

Steps to reproduce:

1\) Open the Sakai Announcements example from the daily build site:

2\) Tab to one of the inline edit fields&#x20;

Notice that the right border of the focus styling is missing

        