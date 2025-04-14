---json
{
  "title": "FLUID-6585",
  "summary": "Workflow skips onCreate entirely for some createOnEvent components timed from resources",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-12-14T07:27:41.789-0500",
  "updated": "2024-07-17T08:12:55.246-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In a complex case which isn't yet fully characterised, the workflow concludeComponentInit firing onCreate and finalising component instantiation can be skipped entirely for some components which are marked as createOnEvent for the onCreate event of a parent, which are timed from some resource construction.

We have some existing test cases for this situation at <https://github.com/amb26/infusion/blob/FLUID-6145/tests/framework-tests/core/js/ResourceLoaderTests.js#L663-L674> but evidently we have a further hole.

This was encountered debugging an issue updating the SJRK storytelling tool to the latest release - the version under test is at <https://github.com/jobara/sjrk-story-telling/blob/SJRK-405-messagesNotLoading/src/ui/ui-storyViewer.js> - there is an existing issue that the persistedValues.uiLanguage listener in base.page triggers two renderings on startup at <https://github.com/jobara/sjrk-story-telling/blob/SJRK-405-messagesNotLoading/src/ui/base-page.js#L115-L118> - since renderAllUiTemplates also fires again after templates have been loaded. It is this second firing, the real one, which is problematic, since all the templateLoader subcomponents of the theme file, "learningReflections" fail to receive onCreate and as a result don't renderer these parts of the UI: <https://github.com/jobara/sjrk-story-telling/blob/SJRK-405-messagesNotLoading/themes/learningReflections/js/learningReflections.js#L59>

The framework instead skips directly from the "constructing" state to "treeConstructed" for the 9 components affected by this workflow bug.

        