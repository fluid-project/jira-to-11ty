---json
{
  "title": "SJRK-226",
  "summary": "Empty image with width applied has thin border",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-02-15T13:41:00.195-0500",
  "updated": "2020-11-12T16:43:49.222-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-226/2019-09-12 Storytelling Tool empty image border bug.PNG",
      "filename": "2019-09-12 Storytelling Tool empty image border bug.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-226/52573365-fe615e00-2de7-11e9-9140-0de29c084164.png",
      "filename": "52573365-fe615e00-2de7-11e9-9140-0de29c084164.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-09-12T14:07:10.831-0400",
      "body": "Issue also occurs in Firefox 69 on Windows 10 v1903\n"
    }
  ]
}
---
Image elements without a source specified and with a width applied in CSS show with a thin border in Firefox and Safari on macOS. Chrome on macOS renders as expected, without the border.

        