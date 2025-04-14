---json
{
  "title": "FLUID-3902",
  "summary": "Right column wraps below other columns for layout reorderer demo in IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-12-14T16:51:40.645-0500",
  "updated": "2015-06-26T10:04:57.294-0400",
  "versions": [
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "FSS",
    "Layout Reorderer"
  ],
  "environment": "Win XP IE 6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3935/",
      "key": "FLUID-3935"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:50:30.476-0500",
      "body": "Please check if this is done and either close it or put it into another release.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-11T12:48:59.715-0500",
      "body": "update the affects version and removed the fix for version\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-18T12:49:11.757-0500",
      "body": "This seems to always be an issue with in IE 6 when viewed in the demo portal\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.169-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.750-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

The right hand column wraps below the other columns. This is dependent on screen size, however at the same size in other browsers, the column doesn't wrap.&#x20;

This may be an issue with the FSS, the use of FSS in the demo, or something in the reorderer itself.

        