---json
{
  "title": "FLOE-260",
  "summary": "Integrate TTS into the first discovery tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-05T15:13:45.444-0500",
  "updated": "2015-11-03T11:18:10.866-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-12T08:33:33.765-0500",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/14>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-02-12T14:58:12.068-0500",
      "body": "Merged @ aba170d5db9f9b8e246f097bbb696c5d1fd14bfc\n"
    }
  ]
}
---
Integrate Text-to-Speech into the first discovery tool. This first pass should be able to be hooked up to read the contents of the tooltips as they are read. Additionally as a panel is displayed it should read the instruction text as well as indicating which panel is open and some additional help related text. The enabling/disabling of the text-to-speech should be hooked up to the a toggle button on the interface.&#x20;

See: \
<http://wiki.fluidproject.org/display/fluid/%28PGA%29+Keyboard+and+self-voicing+interaction+for+first+discovery+tool>

<http://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2029%2015%20small.pdf?version=3&modificationDate=1422562147657&api=v2>

        