---json
{
  "title": "SJRK-112",
  "summary": "Setting the default language of the site should be a single value",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T16:13:19.892-0400",
  "updated": "2018-05-31T16:13:19.892-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
To set the default initial language of the tool (prior to any cookie values being loaded in), the developer must set a number of values:

* {page}.ui.language
* {templateManager}.model.locale
* {resourceLoader}.options.defaultLocale (possibly?)

This should all be handled by one value, namely {page}.model.uiLanguage

        