---json
{
  "title": "FLUID-4342",
  "summary": "In fat panel, iframe should resize to fit contents, after font-size is increased",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "heidi valles",
  "date": "2011-07-14T16:07:13.006-0400",
  "updated": "2013-04-11T17:03:39.854-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4371/",
      "key": "FLUID-4371"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-08-11T01:24:58.570-0400",
      "body": "Bug Parade Infusion 1.4\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-25T10:29:02.619-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/137> merged into project repo at 4018514d2d1fa9d235178ff8ea89d4a3c10f2466\n"
    }
  ]
}
---
Iframe slides open to correct size by default, but if font size is increased, panel closed, and reopened, the iframe is too small and scroll bars appear. It should resize to fit contents.

Setting an em value on the iframe isn't a good solution as it's not protected from live preview. So the height of the iframe increases as the font-size slider is moved. Instead we'll have to change the size of the iframe with a calculated px value once the panel is closed.

        