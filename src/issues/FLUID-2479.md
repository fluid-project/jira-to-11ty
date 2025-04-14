---json
{
  "title": "FLUID-2479",
  "summary": "Clickable region is much larger than the editable text itself with Tiny MCE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Jacob Farber",
  "date": "2009-04-02T14:44:40.000-0400",
  "updated": "2014-07-09T10:08:34.867-0400",
  "versions": [
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
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-07T12:56:38.509-0500",
      "body": "Tested Infusion 1.3, Win 7 FF3.6.\n\nBy adding a width style of 50% to the \"demo-richInlineEdit-container-tinyMCE\" and \"demo-richInlineEdit-container-ckEditor\", I was not able to reproduce this issue.\n\nFurther testing is required since the method of activation has changed (only the \"Edit\" link is clickable, not the whole paragraph).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T10:08:34.864-0400",
      "body": "Currently their is an explicit link to click on in.\n"
    }
  ]
}
---
After using the rich inline editor powered by tiny mce, the activatable hotspot for the editable text becomes the entire region where tiny mce was

        