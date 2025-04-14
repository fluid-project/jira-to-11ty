---json
{
  "title": "SJRK-145",
  "summary": "Welcome screen buttons too wide on small screens",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2018-06-06T14:19:30.592-0400",
  "updated": "2018-12-04T11:25:10.494-0500",
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
      "author": "Gregor Moss",
      "date": "2018-11-30T17:22:23.753-0500",
      "body": "Reproduced, solved, tested and verified using Chrome 70 mobile device emulator set to iPhone 6/7/8, Firefox Quantum 63 in Responsive Design mode at 320 x 480, and Edge&#x20;\n\nWhen testing in Edge 42, the minimum width of the browser (320 px) was less than the minimum supported content width (373px), so it's possible to reduce the browser window to be narrower than the content, which will reproduce the issue. This, as far as I can tell, is not something that can be solved on our end: <https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13621468/>\n"
    }
  ]
}
---
The main buttons on the Welcome page of the Karisma site (which say "tell a story" and "browse stories") are too wide on smaller screens. This was reported on an iPhone 6 in portrait mode. The Editor page looked fine, apparently

        