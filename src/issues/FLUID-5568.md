---json
{
  "title": "FLUID-5568",
  "summary": "Localize the texts used by \"table of contents\" component in prefs framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-11-20T13:44:31.604-0500",
  "updated": "2021-06-22T14:56:34.995-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
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
      "url": "/browse/FLUID-5567/",
      "key": "FLUID-5567",
      "summary": "The ToC header is not localizable"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-12-04T11:14:40.983-0500",
      "body": "Other than only enabling the message file loading and string resolving into uiEnhancer, the decision is to introduce both template and message loading and resolving features.\n\nThe technical plan is to wrap all async loading components that are templateLoader and messageLoader into a wrapper component \"fluid.prefs.resourceManager\". This new component will be used as a grade for:\n\n1\\. \"fluid.prefs.prefsEditorLoader\", to restore the component structure that prefsEditorLoader currently has;\\\n2\\. \"fluid.pageEnhancer\", so that messages and templates defined for enactors can be loaded and are accessible by all enactors that are bound onto uiEnhancer.\n\nI've started working on it in this branch: <https://github.com/cindyli/infusion/tree/FLUID-5568>\n\nThis branch has the new wrapper component \"fluid.prefs.resourceManager\" created and supplied as a grade to \"fluid.prefs.prefsEditorLoader\". The grade version of the preferences framework is back working. Next steps are:&#x20;\n\n1\\. Bring the schema version of the prefs framework back working\\\n2\\. Add the new resourceManager into pageEnhancer for both grade and schema versions\n\nIn this branch, working demos are all the grade version of prefs framework:\n\nexamples/framework/preferences/usingGrades/\\\ntests/manual-tests/framework/preferences/fullPage/\n\nAll other prefs framework demos and examples are still broken.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-22T14:56:34.993-0400",
      "body": "Appears to have been address with work on <https://fluidproject.atlassian.net/browse/FLUID-6322#icft=FLUID-6322>\n"
    }
  ]
}
---
The current preferences framework has two parts: uiEnhancer that applied users' preferences onto the page, and prefsEditor to render the panels where users set their preferences.&#x20;

prefsEditor has a messageLoader subcomponent that loads in all message files, based on which prefsEditor creates a messageResolver that is accessed by all panels for text localization. However, this messageResolver is not accessible by uiEnhancer. Due to this, the "table of contents" component, an enactor hooked up into uiEnhancer to add table of contents onto the page, is not able to localize its texts.&#x20;

In general, we need to provide a mechanism for all enactors that attached on uiEnhancer to be able to localize their texts.

        