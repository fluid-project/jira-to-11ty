---json
{
  "title": "FLUID-131",
  "summary": "If the session times out, Lightbox appears to still successfully reorder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Eli Cochran",
  "date": "2007-11-27T13:35:45.000-0500",
  "updated": "2009-05-05T08:57:20.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nSakai 2.5.x\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2007-11-27T13:37:05.000-0500",
      "body": "I just want to add that this is part of a general problem with Sakai giving poor feedback as to timeouts. We need a little JS session timer component.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-05T08:57:20.000-0400",
      "body": "We no longer use the image gallery example\n"
    }
  ]
}
---
If you open up a Gallery and leave it idle until the session times out, you can still reorder items on the page. The page will show the items reordering appearing to work, but really nothing is being saved to the back-end, and when you refresh, re-sign-in and go to check your gallery everything will be back as it was.&#x20;

Steps to reproduce:

* Open Gallery
* Let it sit idle for 30 minutes.
* Move elements on the page

Observe that Lightbox doesn't produce any feedback that the session has timed out.&#x20;

        