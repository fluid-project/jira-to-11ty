---json
{
  "title": "FLOE-245",
  "summary": "Find a way to host JSON transcript files on CDN",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2014-10-09T13:03:22.449-0400",
  "updated": "2015-06-16T14:05:28.489-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "EPUB"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now, if you host a JSON file on the Cachefly CDN (e.g. a transcript for the video player), the site hosting the video player throws a cross-origin error, denying access to the cachefly url.

One possible solution might be to change the settings on the hosting site to identify cachefly as an exception to the security rules.

This issue was identified on the SNOW videos site (snowvids.idrc.ocad.ca)

        