---json
{
  "title": "FLUID-6664",
  "summary": "Inconsistent use of text sizes and styling in the Grades demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2021-07-08T10:10:41.415-0400",
  "updated": "2021-07-08T10:10:41.415-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6664/Screenshot_20210708-095502.png",
      "filename": "Screenshot_20210708-095502.png"
    }
  ],
  "comments": []
}
---
The Grades demo uses inconsistent text sizes throughout the demo which makes it hard to read, especially on mobile.

This issue is made even more confusing by the text "This page might be a bit difficult to read or use. Why don't you consider using the display preferences option?" which does not improve readability of the initial block of text.

Suggestion:

* Use consistent and logical text weight and size scheme.
* visually distinguish between the demo instruction text and the demo content (i.e. the Apple vs. Oranges content).

        