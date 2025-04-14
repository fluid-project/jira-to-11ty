---json
{
  "title": "FLUID-6389",
  "summary": "Look into using Mercury-Parser to provide page and link summaries",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2019-07-30T15:01:21.731-0400",
  "updated": "2024-07-24T13:17:30.543-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-6386/",
      "key": "FLUID-6386",
      "summary": "Explore using mercury parser for summarizing page content"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Mercury-Parser allows for pulling information from a web page to provide a summary of the content and some statistics like word count, publication date and etc. It also provides an excerpt of the content, title, and returns the markup of the main content.

These could be used to generate content summaries to display at the top of a web page, and potentially also for links so that a user could understand what they will be navigating to.

* <https://github.com/postlight/mercury-parser>
* <https://jsfiddle.net/39rm0onf/7/>

        