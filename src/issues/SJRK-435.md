---json
{
  "title": "SJRK-435",
  "summary": "Table of Contents link on Edit page goes to story preview",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2020-12-03T17:39:02.705-0500",
  "updated": "2021-01-12T10:09:04.851-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-12-08T17:57:40.603-0500",
      "body": "For the time being, the decision was made to hide the TOC on the Edit page at all times, circumventing the bug. This was done by adding a CSS rule to the Edit page's head which makes the TOC container element \"display: none !important\". Adding this rule to the TOC element inline would make the rule more specific (as inline styling has the highest specificity), but because [the TOC enactor calls jQuery .show() and .hide()](https://github.com/fluid-project/infusion/blob/39773eb69938b6fa0bb9e3ae8f083775d2754f2f/src/framework/preferences/js/Enactors.js#L512-L522) the TOC gets shown when the preference is turned off and then on again (but not when it's turned on intially, apparently).\n\nVarious other approaches were considered and attempted, including:\n\n* setting the model relay between the historian and page components to be one-way from the page to the historian only (this broke the historian's visibility-setting functionality)\n* turning off the TOC panel/preference for this page via overriding the UIO options in the Edit page grade (this would be better, but would take more time to implement than the chosen solution)\n* overriding the TOC template to a blank template (a bit hacky) or to no template (UIO raised errors when this was attempted)\n* modifying/updating fluid-location-bar-relay to configure it to be used the way the Storytelling Tool needs (this was considered only)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-12-09T08:59:44.646-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/104> ) into the project repo at c52e54e2aed53540cae12718dba3c48e520a0eb4\n"
    }
  ]
}
---
When the UIO "Table of Contents" preference is activated after loading the Story Edit page, the link will take the author to the story preview. This also bypasses the updating of the preview step, so it will show whatever was current in the story model the last time the author clicked on "Preview my story" on the metadata step.

The solution may involve looking into the Tool's usage of [fluid-location-bar-relay](https://github.com/fluid-project/fluid-location-bar-relay) for browser history management, as that affects the address bar, and vice versa. UIO's ToC enactor will generate a link and anchor for each h1 heading on the page which, when clicked, will modify the page URL to go to the anchor, adding a new history state to the "fluid.locationBar" component and interfering with the Edit page's visibility state model values.

**To reproduce:**\
1\. Go to <https://staging-stories.floeproject.org/storyEdit.html>\
2\. Click "+ show preferences" at the top-right corner\
3\. On the "table of contents" preference, click the toggle to set it to "ON"

*Note: If the preference was set to "ON" when the page loaded, you must set it to "OFF", reload the page and follow the steps anew.*

**Expected:**\
Unsure, requires some design iteration. The table of contents probably shouldn't be shown on this page, or perhaps it could show a summary of blocks, and the links would go to each block within the editor.

**Actual:**\
The story preview is shown, potentially showing an outdated preview (as described above).

        