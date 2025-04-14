---json
{
  "title": "FLUID-6312",
  "summary": "Make preferences framework locale handling work the way the docs say it does",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2018-07-31T16:44:58.716-0400",
  "updated": "2024-07-22T10:35:24.106-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5928/",
      "key": "FLUID-5928",
      "summary": "Schema and Grade version save preferences to different values"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299",
      "summary": "Add translated message bundles to UIO"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300",
      "summary": "Implement client-side rerender of UIO based on locale changes"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6301/",
      "key": "FLUID-6301",
      "summary": "Implement persistence of UIO locale as a stored preference"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303",
      "summary": "Implement a panel, adjuster and enactor for locale"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6360/",
      "key": "FLUID-6360"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-10-03T14:30:40.100-0400",
      "body": "After discussions with @@Michelle D'Souza, @@Alan Harnum and @@Justin Obara, we will be storing the locale at {prefsEditorLoader}.settings.preferences.locale, as any previous storage scheme was either not implemented or not implemented correctly, so there is no concern for backwards compatibility. Also, considering we've got a panel and enactor implemented as part of <https://fluidproject.atlassian.net/browse/FLUID-6303#icft=FLUID-6303>, it follows that any value stored as a result of actions within that panel should be stored along with the values from other panels, i.e. on the \"preferences\" key.\n\nRevised goal:\n\n* get it to store and load properly from {prefsEditorLoader}.settings.preferences.locale\n* add any required tests\n* readjust the docs (this could/should be a separate Jira)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-12-17T07:57:03.464-0500",
      "body": "I've been thinking about this more as I look at the panel and enactor for language selection (<https://fluidproject.atlassian.net/browse/FLUID-6303#icft=FLUID-6303>). It is definitely required to store language as a preference for the panel/enactor. However, when using the schema it won't be stored at \"preferences.locale\". The exact location is specified based on the type name. For example, it would end up being something like \"preferences.fluid\\_prefs\\_localization\".\n"
    }
  ]
}
---
Per discussion on this pull request: <https://github.com/fluid-project/infusion-docs/pull/139>

1\. "locale" is currently in the code as being set at "{prefsEditorLoader}.settings.preferences.locale"\
2\. It shouldn't be there.\
3\. We're going to move it back to "{prefsEditorLoader}.settings.locale", as the documentation specifies and update any tests or functions accordingly

This will store "locale" at the same level as "panelIndex" - a persisted property important for the component's state maintenance between reloads that is not a user-editable preference with a panel, enactors, etc.

        