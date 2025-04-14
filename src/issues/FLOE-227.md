---json
{
  "title": "FLOE-227",
  "summary": "Improve pouchDBDataSource to queue requests",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Cindy Li",
  "date": "2014-08-22T16:24:57.894-0400",
  "updated": "2020-11-04T18:20:16.063-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5542/",
      "key": "FLUID-5542",
      "summary": "Implement a datasource wrapper to queue and amalgamate requests."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-09-19T10:45:47.324-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/metadata/pull/43>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-10-26T12:42:16.104-0400",
      "body": "The work for this issue will be shifted to FLUID-5542 as an improvement/addition to Infusion. See comments from <https://github.com/fluid-project/metadata/pull/43>\n"
    }
  ]
}
---
One issue with the asynchronous pouchDBDataSource set function is, if a "set" call was issued whilst the previous one is still outstanding, it would not be saved properly, only the data in the previous call would be saved.

As per discussions with Antranig in the IRC channel: <https://botbot.me/freenode/fluid-work/2014-08-22/?tz=America/Havana>, 11:10AM:

The callback from the set function can be listened to, whilst a save request was outstanding, we would not send another one.

A jQuery plugin that can potentially be used: <https://github.com/cowboy/jquery-throttle-debounce>

        