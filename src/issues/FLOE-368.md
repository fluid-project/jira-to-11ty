---json
{
  "title": "FLOE-368",
  "summary": "When selecting language with no bundle, spanish lang and tooltip are wrong",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2015-06-02T15:45:01.799-0400",
  "updated": "2015-11-03T12:46:04.383-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-368/bad-language-bundle.png",
      "filename": "bad-language-bundle.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-06-02T15:45:37.092-0400",
      "body": "This screenshot shows what it looks like\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-03T15:12:53.509-0400",
      "body": "The pull request (<https://github.com/fluid-project/first-discovery/pull/81>) has been merged @ 2468e0c545976ed65d500f41213aa7813cbef952\n"
    }
  ]
}
---
When you choose a language that we don't have any language bundles for, the entry for "Spanish" says "English" and the tooltip for it can't be found – you get the 'message not found' error string

        