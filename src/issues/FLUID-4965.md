---json
{
  "title": "FLUID-4965",
  "summary": "Enlarging text size plus emphasizing links disturb the styling of text sliders",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2013-04-01T13:06:01.123-0400",
  "updated": "2013-04-29T09:17:50.637-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4938/",
      "key": "FLUID-4938"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4965/text slider.jpeg",
      "filename": "text slider.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-04-01T13:40:18.804-0400",
      "body": "Sent the pull request: <https://github.com/fluid-project/infusion/pull/304>\n"
    }
  ]
}
---
Maximizing the text size and turn on "underline and bold" in the fat panel, close and re-open UIO panel, the styling of the text sliders become:

1\. The middle of the sliding handle no longer fits on the sliding bar;\
2\. The handle overlaps the text area.

        