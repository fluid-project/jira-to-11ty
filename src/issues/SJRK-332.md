---json
{
  "title": "SJRK-332",
  "summary": "Audio capture not available nor presented",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-03-25T11:18:09.344-0400",
  "updated": "2020-07-02T13:56:54.252-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Apple iPad Air 3, iOS 13.3, Safari\\\nGoogle Pixel 3, Android 10, Firefox 68\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When adding an audio block, the "audio capture" option is not available, and the user can only upload from the device file system.

There is likely not much to be done about this, as it is likely app- and OS-level. In Android Firefox, it may depend on Firefox not sending the same Intents as Chrome, for instance. Some versions of Safari don't offer the option, either.

This Jira is intended to document the issue rather than to attempt to solve it.

        