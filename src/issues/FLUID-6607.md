---json
{
  "title": "FLUID-6607",
  "summary": "Remove Normalize.css dependency",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2021-03-25T09:59:50.080-0400",
  "updated": "2021-04-01T14:43:50.637-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-04-01T14:43:46.247-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1042> ) into the project repo at f346ada4eefc1b056c35aaab39885e87285c3594\n"
    }
  ]
}
---
After some [discussion](https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$HNjRJi42NowLyUtt2C3BTJV36_ZmIztyUaXlW8G_rJk?via=matrix.org), Antranig Basman, Justin Obara and I agreed that it would make sense to remove the Normalize dependency for Infusion CSS for a couple of reasons:

* Projects using infusion may already be using Normalize as a reset, which would result in duplicate CSS
* Projects using Infusion may use a different reset ([Sanitize](https://github.com/csstools/sanitize.css/), [Modern Normalize](https://github.com/sindresorhus/modern-normalize), [Modern CSS Reset](https://github.com/hankchizljaw/modern-css-reset), etc) which could result in duplicate or conflicting rules

Instead, CSS for Infusion components will be updated where necessary to compensate for any visual changes caused by removing Normalize.

        