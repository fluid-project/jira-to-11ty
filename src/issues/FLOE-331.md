---json
{
  "title": "FLOE-331",
  "summary": "Save the state information into the central model",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-05-12T13:42:31.903-0400",
  "updated": "2015-11-03T12:56:33.907-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-416/",
      "key": "FLOE-416",
      "summary": "Upgrade Infusion to the 2.x line from Infusion master"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-337/",
      "key": "FLOE-337"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5665/",
      "key": "FLUID-5665"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-09-24T11:02:33.486-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/100>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-25T12:01:46.493-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/100> ) into the project repo at 4eab9e1ed2caf767876a0525b922565c897622c6\n"
    }
  ]
}
---
Things to save:

1\. The current panel number;\
2\. The state of the sticky key assessment panel;\
3\. Visited panels so that icon states can be maintained.

        