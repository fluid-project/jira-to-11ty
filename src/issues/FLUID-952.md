---json
{
  "title": "FLUID-952",
  "summary": "Avatar not under pointer if element is picked up while partly off screen,  using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-07-21T14:48:04.000-0400",
  "updated": "2009-02-03T14:23:42.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-953/",
      "key": "FLUID-953"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-952/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T13:28:50.000-0400",
      "body": "'screenshot-1' shows the pointer away from the avatar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-23T14:01:56.000-0500",
      "body": "\"Focused Fix Day Wish List\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-03T14:23:42.000-0500",
      "body": "Appears to have been fixed at r6398 as part of  the jQuery upgrade (<https://fluidproject.atlassian.net/browse/FLUID-2180#icft=FLUID-2180>)\n\nTested using:\\\nIE 6 (Win XP, Win 2000)\\\nIE 7 (Win XP, Win Vista)\n"
    }
  ]
}
---
When grabbing an avatar that is partly off screen (scroll bars in window), the avatar  remains far away from the pointer.

Steps to reproduce:

1\) Open the generic lightbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/image-reorderer/image-reorderer.html>

2\) adjust the browser size, so that a scroll bar appears

3\) drag one of the elements which is partly off screen. Notice that its avatar is not under the pointer.

        