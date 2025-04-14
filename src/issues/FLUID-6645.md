---json
{
  "title": "FLUID-6645",
  "summary": "Separated panel test fails: eparated panel initial panelIndex tester (#113) on Chrome Android",
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
  "date": "2021-06-29T15:15:45.656-0400",
  "updated": "2021-07-05T15:32:14.022-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6645/Screenshot_20210629-151844.png",
      "filename": "Screenshot_20210629-151844.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-29T16:33:51.786-0400",
      "body": "Wasn't able to reproduce on Pixel 5 running Android 11 and Chrome 91.0.4472.120\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T10:44:33.005-0400",
      "body": "It seems that if the Display Size setting on the device is other than Default, this test would fail.\n\nBy setting the display size to small, you will be able to reproduce this.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2021-07-05T15:31:41.375-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-6650#icft=FLUID-6650> now covers this issue.\n"
    }
  ]
}
---
Separated panel test: Scrolled to panel below bounds (#62) fails on Chrome on Android when running the automated tests.

The following is the output:

```java
Separated panel initial panelIndex tester: Separated panel initial panelIndex tester: Scrolled to panel 2: The panel at index 2 should be scrolled into view with offset = 0 - at sequence position 5 of 5
Expected: 	
0
Result: 	
0.16042780876159668
Diff: 	
0 0.16042780876159668
```

        