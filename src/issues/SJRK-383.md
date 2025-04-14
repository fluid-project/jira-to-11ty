---json
{
  "title": "SJRK-383",
  "summary": "Add Headless Edge to testem browser list once supported",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-08-04T13:52:29.905-0400",
  "updated": "2020-08-04T13:56:11.953-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-08-04T13:54:00.233-0400",
      "body": "Can add the \"Headless Edge\" to the list of browsers in the testem.js <https://github.com/fluid-project/sjrk-story-telling/blob/f3ad5428bc4594aa4d9e0b103cd220d46065f986/tests/ui/testem.js#L35>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-04T13:56:11.953-0400",
      "body": "We require this change <https://github.com/testem/testem/pull/1410> for the \"Headless Edge\" launcher to be available.\n"
    }
  ]
}
---
Once [testem](https://github.com/testem/testem) releases a version that supports runners for Headless versions of Microsoft Edge, add "Headless Edge" to the list of browsers tested by testem.

        