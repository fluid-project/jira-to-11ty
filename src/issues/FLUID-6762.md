---json
{
  "title": "FLUID-6762",
  "summary": "The syllabification enactor throws error on engadget.com",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Cindy Li",
  "date": "2022-12-20T14:41:11.817-0500",
  "updated": "2022-12-20T14:53:34.018-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Syllabification Enactor"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
1\. Install UIO+ in Chrome. Open <https://www.engadget.com/>;\
2\. Open UIO+ and turn on the syllables preference;

The page is syllabficated but throws this error in the console log:

```java
Uncaught TypeError: window.Hypher is not a constructor
    at en-us.js:26:9
    at en-us.js:35:2
```

This issue is also filed in UIO+ repository at <https://github.com/fluid-project/uio-plus/issues/41>

        