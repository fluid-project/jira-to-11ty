---json
{
  "title": "FLUID-6639",
  "summary": "Separated panel test fails: Initial Rendering test (#34) on Chrome Android",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2021-06-29T14:56:29.455-0400",
  "updated": "2021-07-05T15:33:27.173-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Android 11\\\nChrome 91.0.4472.120\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6639/Screenshot_20210629-151705.png",
      "filename": "Screenshot_20210629-151705.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T16:34:49.560-0400",
      "body": "Wasn't able to reproduce on Pixel 5 running Android 11 and Chrome 91.0.4472.120\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T10:42:39.112-0400",
      "body": "It seems that if the Display Size setting on the device is other than Default, this test would fail.\n\nBy setting the display size to small, you will be able to reproduce this.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T15:33:23.356-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-6650#icft=FLUID-6650> now covers this issue.\n"
    }
  ]
}
---
Separated panel test Initial Rendering test (#34) fails on Chrome on Android when running the automated tests.

The following is the output:

```java
Separated panel integration tests: Separated panel integration tests: Initial Rendering: The panel at index 0 should be scrolled into view with offset = 0 - at sequence position 5 of 19
Expected: 	
0
Result: 	
0.29411762952804565
Diff: 	
0 0.29411762952804565 
Source: 	
    at runLoggingCallbacks (https://build-infusion.fluidproject.org/tests/lib/qunit/js/qunit.js:1611:19)
```

        