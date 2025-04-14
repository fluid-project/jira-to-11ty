---json
{
  "title": "FLUID-6498",
  "summary": "Use \"preload\" value for rel attribute on `<link>` tag to improve performance",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Teddy",
  "date": "2020-05-12T16:00:20.784-0400",
  "updated": "2020-05-14T07:49:25.072-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Use `<link rel=preload>` to prioritize [fetching resources](https://web.dev/uses-rel-preload/?utm_source=lighthouse\&utm_medium=devtools) that are currently requested later in page load 

*example:*

```java
<link rel="preload" href="../../../lib/normalize/css/normalize.css" as="style" onload="this.rel='stylesheet'"/>
```

 

        