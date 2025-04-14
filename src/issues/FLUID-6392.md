---json
{
  "title": "FLUID-6392",
  "summary": "Orator cancels TTS on init",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2019-08-07T10:53:38.390-0400",
  "updated": "2024-07-22T10:35:11.184-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-08-07T14:08:20.043-0400",
      "body": "This was probably legacy code when running into issues with the TTS still running after reloading the page. This has been addressed by cancelling TTS on unload.\n"
    }
  ]
}
---
UIO+ ran into an issue where dynamically loaded iframes were causing the self voicing to be stopped ( <https://issues.gpii.net/browse/GPII-3977> ). It appears the reason is because the iframe loads a new instance of the Orator because each iframe is passed the content scripts. When the Orator is initialized the following model listener is triggered.

```java
modelListeners: {
            "enabled": {
                listener: "{tts}.cancel",
                namespace: "orator.clearSpeech"
            }
        },
```

The result is that the TTS is cancelled every time an iframe is loaded. 

        