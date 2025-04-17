---json
{
  "title": "SJRK-256",
  "summary": "Explore allowing multiple theme CSS and JS files",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-18T23:36:01.604-0400",
  "updated": "2019-07-29T17:34:02.052-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-264/",
      "key": "SJRK-264",
      "summary": "Remove \"baseTheme\" from clientConfig values"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Based on a [review comment](https://github.com/fluid-project/sjrk-story-telling/pull/33#pullrequestreview-263893884) by Cindy Li:

> It seems limited to only allow users to write one js file and one css file for their custom themes. Users would have more freedom if these type of files can be included in their custom templates such as a header template.

Explore adding the ability to load multiple CSS and JavaScript files for each theme page, as well as different CSS/JS files from page to page.

        