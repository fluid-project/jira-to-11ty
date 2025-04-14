---json
{
  "title": "SJRK-445",
  "summary": "\"Story builder\" shows up in menu template",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-15T15:52:08.173-0500",
  "updated": "2020-12-15T15:53:55.151-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-445/2020-12-15 ST story builder on all pages.png",
      "filename": "2020-12-15 ST story builder on all pages.png"
    }
  ],
  "comments": []
}
---
The base-theme template for the "menu" UI contains the "Story Builder" title, regardless of what page is actually being shown (see attached screenshot for an example). This should only appear on the storyEdit page.

All current themes (at the time of filing) overwrite the "menu" template, so this is not an issue in practice, though it is an oversight that should be corrected.

The template definition for this section can be found here:\
<https://github.com/fluid-project/sjrk-story-telling/blob/c52e54e2aed53540cae12718dba3c48e520a0eb4/themes/base/templates/menu.handlebars#L1-L4>

        