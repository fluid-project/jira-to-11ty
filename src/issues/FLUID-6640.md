---json
{
  "title": "FLUID-6640",
  "summary": "Separated panel test fails: ScrollToPanel 2 test (#43) on Chrome Android",
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
  "date": "2021-06-29T15:04:08.083-0400",
  "updated": "2021-07-05T15:33:09.215-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6640/Screenshot_20210629-151728.png",
      "filename": "Screenshot_20210629-151728.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T16:34:39.795-0400",
      "body": "Wasn't able to reproduce on Pixel 5 running Android 11 and Chrome 91.0.4472.120\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T10:43:25.777-0400",
      "body": "It seems that if the Display Size setting on the device is other than Default, this test would fail.\n\nBy setting the display size to small, you will be able to reproduce this.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T15:33:06.037-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-6650#icft=FLUID-6650> now covers this issue.\n"
    }
  ]
}
---
Separated panel test ScrollToPanel 2 test (#43) fails on Chrome on Android when running the automated tests.

The following is the output:

```java
Separated panel integration tests: Separated panel integration tests: ScrollToPanel 2: The panel at index 2 should be scrolled into view with offset = 0 - at sequence position 7 of 19
Expected: 	
0
Result: 	
0.16042780876159668
Diff: 	
0 0.16042780876159668
```

        