---json
{
  "title": "FLUID-4016",
  "summary": "Investigate and possibly remove \"stylisticOffset\" from reorderer options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2010-12-22T15:52:59.822-0500",
  "updated": "2018-03-21T08:53:32.004-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-22T15:59:34.923-0500",
      "body": "We will remove this as soon as trunk unfreeze for 1.4. It might be worth a small historical search to discover when exactly this selector became disused and whether it was intended that whatever facility it offers can be achieved by some other means or was deemed undesirable for some other reason.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-09T11:20:03.842-0500",
      "body": "Related to the above investigation request. I've done a\n\ngit log -S\"stylisticOffset\"\n\non the repo. It produced the following revisions from most recent:\n\n* 8b9e81234b20659e8e03f166d0def9dd8881b7a8\n\n- 36fd690f483c7008c8eda35729ad7cb7cc07939e\n\n* 36fd690f483c7008c8eda35729ad7cb7cc07939e\n\nWhile in the bottom two show the current additions of the stylisticOffset. I didn't locate any where that it was actually being used, or any real indication for what it was for.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-20T10:12:50.386-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/881> ) into the project repo at 9954bf9a214c5c8e2e405ca6c543283da40a0f97\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-21T08:53:27.357-0400",
      "body": "Merged Infusion-Docs PR ( <https://github.com/fluid-project/infusion-docs/pull/133> ) at d942655fb33122a9cfa36b605bd086a00e78ca32\n"
    }
  ]
}
---
stylisticOffset is a selector in the Reorderer's defaults, but doesn't appear to be used in the code, or documented. Seems like it should be removed.

        