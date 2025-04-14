---json
{
  "title": "FLOE-200",
  "summary": "The feedback bar overlaps the header and UIO button at smaller screen sizes.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-07-18T09:08:05.230-0400",
  "updated": "2014-07-18T09:09:57.211-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-200/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-18T09:09:57.107-0400",
      "body": "screenshot.png shows the feedback tool overlapping the header and UIO button.\n"
    }
  ]
}
---
If the icons in the toolbar are too big to fit on a  single row, they wrap to a new line. However, this causes the bar to overlap the header and UIO's display preferences button. This is because the tool bar is of fixed position and floating over the page.&#x20;

        