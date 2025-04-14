---json
{
  "title": "FLOE-272",
  "summary": "Fix styling issues on Android and iOS",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-02-13T08:45:45.346-0500",
  "updated": "2015-11-03T11:22:58.735-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": "Android 5 (Lollipop)\\\niOS 8\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-272/Android-Chrome-01-not-centred.png",
      "filename": "Android-Chrome-01-not-centred.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-272/Android-Chrome-02-wrapping-button.png",
      "filename": "Android-Chrome-02-wrapping-button.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-272/Android-Chrome-03-overlapping-tooltip-text.png",
      "filename": "Android-Chrome-03-overlapping-tooltip-text.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-272/Android-Chrome-04-prev-next-padding.png",
      "filename": "Android-Chrome-04-prev-next-padding.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-272/screenshot-safari-mac-os-x.png",
      "filename": "screenshot-safari-mac-os-x.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-02-13T08:51:24.681-0500",
      "body": "Android issues discovered so far:\n\n* Image-01 Text size adjuster is not centred to screen\n* Image-02 The contrast theme buttons are pushed below the indicator\n* Image-03 When focused on the + button, the focus border overlaps with the label\n* Image-04 The arrow icon overlaps with the focus border on the next and previous buttons.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-02-13T09:06:48.279-0500",
      "body": "screenshot-safari-mac-os-x.png shows that in Safari 8 on Mac OS 10.10 there are some visible artifacts around the white border of the back/next arrows. One possible way to address this would be to use a transparent border instead of a white border.\n"
    }
  ]
}
---
Using Android and iOS devices, test the first discovery tool in Chrome and Safari to ensure proper styling and operation.

        