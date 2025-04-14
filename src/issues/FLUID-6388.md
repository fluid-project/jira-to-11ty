---json
{
  "title": "FLUID-6388",
  "summary": "text-font options should be excluded from text-font theming",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Alan Harnum",
  "date": "2019-07-29T11:00:58.949-0400",
  "updated": "2019-07-29T11:00:58.949-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The text-font select drop down should display each font name in the style of the font-family.

Currently, this works inconsistently when a text-font theme is applied, as the themes have equal weight in the CSS stack. Thus, the last one in the CSS will "win".

The screenshot below should make the issue clearer - Comics Sans, being last in the CSS definitions, gets applied to all the text-font choices when it is selected as the theme.

Fixing this requires excluding the text-font select options from text-font theming, similar to what is done currently for icons.

 

<!-- media: file UNKNOWN_MEDIA_image-2019-07-29-10-59-41-569.png -->

        