---json
{
  "title": "FLUID-5928",
  "summary": "Schema and Grade version save preferences to different values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-07-14T12:53:44.906-0400",
  "updated": "2024-07-22T10:35:20.270-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6312/",
      "key": "FLUID-6312"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-6360/",
      "key": "FLUID-6360"
    }
  ],
  "attachments": [],
  "comments": []
}
---
When using the grade version of the preference framework the preferences are stored as:

```javascript
{
    inputsLarger: true,
    lineSpace: 1.5,
    links: true,
    textFont: "comic",
    textSize: 1.5,
    theme: "lgdg",
    toc: true
}
```

However the schema version stores preferences  like:

```javascript
{
    fluid_prefs_contrast: "lgdg",
    fluid_prefs_emphasizeLinks: true,
    fluid_prefs_inputsLarger: true,
    fluid_prefs_lineSpace: 1.5,
    fluid_prefs_tableOfContents: true,
    fluid_prefs_textFont: "comic",
    fluid_prefs_textSize: 1.5
}
```

The result is that preferences saved in the two versions of the prefs framework are incompatible. They should use the same structure to store the preferences.&#x20;

This can be viewed from the build site by comparing the cookies stored by these manual-tests

* [Grade Version](http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage/index-nativeHTML.html)
* [Schema Version](http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage-schema/index-nativeHTML.html)

        