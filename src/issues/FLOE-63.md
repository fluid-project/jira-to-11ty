---json
{
  "title": "FLOE-63",
  "summary": "In IE8, open/close arrows don't scale",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2012-07-31T15:58:47.135-0400",
  "updated": "2012-08-16T13:30:45.797-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-63/bad-arrows-1.png",
      "filename": "bad-arrows-1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-63/bad-arrows-2.png",
      "filename": "bad-arrows-2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-63/bad-arrows-3.png",
      "filename": "bad-arrows-3.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-07-31T17:19:16.295-0400",
      "body": "It might be worth investigating whether or not an IE 'filter' might work:\n\nfilter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='my/image.png', sizingMethod='scale');\n\nNote that this scales the image to fill the container, so won't work unless the container is appropriate (which it likely is not).\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T13:30:45.734-0400",
      "body": "Should be fixed.\n"
    }
  ]
}
---
The 'twiddle' open/close arrows we're using aren't scaling in IE8 (they're 2x size, and scaled down for normal size). We'll probably need a separate stylesheet for IE8, and special smaller images that won't scale up. I'll attach a screenshot.

        