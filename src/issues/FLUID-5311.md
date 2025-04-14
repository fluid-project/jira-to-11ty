---json
{
  "title": "FLUID-5311",
  "summary": "Default line height in UI Options demo in Safari is too low causing overlap",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Dana",
  "date": "2014-04-17T17:32:37.289-0400",
  "updated": "2014-04-30T16:12:58.870-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "Safari&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5311/Screen Shot 2014-04-17 at 4.58.10 PM.png",
      "filename": "Screen Shot 2014-04-17 at 4.58.10 PM.png"
    }
  ],
  "comments": []
}
---
Is this possibly the same as FLUID-4519?

Upon opening the demo for the first time in Safari, with line spacing at default value of 1.0, the line spacing (in both the overview panel and the content) is too small and lines of text are overlapping each other.

        