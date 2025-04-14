---json
{
  "title": "FLUID-6022",
  "summary": "Contrast too low for text in the textfield and textarea in demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-02T10:55:35.840-0400",
  "updated": "2016-11-02T10:57:23.878-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Safari 10 ( macOS 10.12 )\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6022/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T10:57:23.878-0400",
      "body": "screenshot.png shows the textfield and textarea with low contrast text.\n"
    }
  ]
}
---
[tota11y](http://khan.github.io/tota11y/) bookmarklet error:

The color combination #808080/#ffffff has a contrast ratio of 3.95, which is not sufficient. At this size, you will need a ratio of at least 4.5.

Consider using the following foreground/background combination:

\#767676/#ffffff  /  has a ratio of 4.54 \
Preview:  \
Relevant code:

```java
<textarea id="comments" style="color: rgb(128, 128, 128); background-color: rgb(255, 255, 255);">This form is non-functional, and exists only for demonstrating Preferences Editor functionality</textarea>
```

        