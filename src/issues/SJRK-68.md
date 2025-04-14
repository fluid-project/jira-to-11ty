---json
{
  "title": "SJRK-68",
  "summary": "Make multilingual tests of templateManager better",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-04-02T17:25:33.800-0400",
  "updated": "2018-11-28T12:12:46.091-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/SJRK-121/",
      "key": "SJRK-121"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Need to have a better sense of how to:

* handle potential multilingual input that have differing character sets, as well as right-to-left scripts
  * for instance, Farsi and Japanese would be good candidate choices
* test multilingual input
* store them - HTML entities, unicode, etc?

Issues encountered already:

* encoding between platforms (local vs server)
* testability of multilingual strings when rendering message bundles to DOM

        