---json
{
  "title": "SJRK-302",
  "summary": "Site content/background squeezed in at narrow widths",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-26T22:04:32.393-0400",
  "updated": "2020-04-29T14:11:10.476-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-302/2019-09-26 ST iPhone 8 background bug 1.png",
      "filename": "2019-09-26 ST iPhone 8 background bug 1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-302/2019-09-26 ST iPhone 8 background bug 2.png",
      "filename": "2019-09-26 ST iPhone 8 background bug 2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-302/2020-04-29 ST Galaxy S9 simulated background bug.png",
      "filename": "2020-04-29 ST Galaxy S9 simulated background bug.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-04-29T14:08:28.704-0400",
      "body": "Issue was also reported by @@Cindy Li while testing the <https://fluidproject.atlassian.net/browse/SJRK-342#icft=SJRK-342> pull request: <https://github.com/fluid-project/sjrk-story-telling/pull/74>\n\nSee the attached \"2020-04-29 ST Galaxy S9 simulated background bug.png\" for that instance.\n"
    }
  ]
}
---
At narrow widths, particularly on an iPhone 8, the site content is pushed in from the right side and is not taking up the full width of the screen. This may be related to one or two containers (likely UIO panel) having a set minimum width while the rest of the content is able to go narrower.

Occurs on iPhone 8, but can easily be reproduced by emulating a narrow display in Chrome or other browsers' development tools

The issue can more easily be reproduced by increasing text size via UIO

        