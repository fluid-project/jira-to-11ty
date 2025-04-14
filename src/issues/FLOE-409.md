---json
{
  "title": "FLOE-409",
  "summary": "Move tts hookup configuration to be applied at the panel level",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2015-08-10T13:41:05.105-0400",
  "updated": "2015-08-10T13:41:05.105-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The ttsHookup is intended to be added to gpii.firstDiscovery.firstDiscoveryEditor directly. However, it should be reconfigured like the tooltip hookup and placed at the panel level. The issue at the moment is that a given panel doesn't know when it is visible. All this information is contained at the editor level, which also doesn't really know which panel component is shown.

        