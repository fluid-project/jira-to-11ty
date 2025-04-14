---json
{
  "title": "FLUID-6477",
  "summary": "Navigation links from news items have the incorrect path",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2020-03-12T09:00:18.425-0400",
  "updated": "2024-07-22T10:35:33.731-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5588/",
      "key": "FLUID-5588",
      "summary": "Fluid docpad build process should handle relative URLs / paths"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5590/",
      "key": "FLUID-5590",
      "summary": "UI Options does not work if website deployed to non-root path"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Steps to reproduce:

1. Open the [fluidproject.org](https://fluidproject.org/) website
2. Go to the News page
3. Open a news item (e.g. <https://fluidproject.org/news/2017-02-02-Infusion_2_0_released.html> )
4. click any of the top navigation links
5. Notice the 404 because "news" is in the url. 

Possibly related to changes to FLUID-5588 and FLUID-5590

        