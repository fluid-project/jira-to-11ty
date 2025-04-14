---json
{
  "title": "FLUID-5947",
  "summary": "Refactor file structure of prefs framework to reflect important architectural boundaries",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2016-08-24T10:27:15.487-0400",
  "updated": "2021-07-29T01:46:41.843-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The file layout of the prefs framework is a bit haphazard, making it hard to find particular implementations or categories of thing. It is all lumped into the top level of src/framework/preferences/js but seems to me to belong in (at least) the following divisions:

1. The core prefs framework itself
   * &#x20; PrefsEditor.js
   * &#x20; Store.js
   * &#x20; URLUtilities.js
   * &#x20; UIEnhancer.js
2. Builders
   * &#x20; Builder.js
   * &#x20; AuxBuilder.js
   * &#x20; PrimaryBuilder.js
3. Particular packagings of the UI
   * &#x20; FullNoPreviewPrefsEditor.js
   * &#x20; FullPreviewPrefsEditor.js
   * &#x20; SeparatedPanelPrefsEditor.js
4. Starter configuration
   * &#x20; StarterGrades.js
   * &#x20; StarterSchemas.js
5. Built-in panels and enactors (these files should be renamed)
   * &#x20; Panels.js - this file needs to be split in two - the first part goes in i), the last part goes here
   * &#x20; Enactors.js - similarly everything up to line 124 needs to go in the framework
6. SelfVoicing
   * &#x20; SelfVoicingEnactor.js
   * &#x20; SelfVoicingPanel.js
   * &#x20; SelfVoicingSchemas.js

We should make new top-level directories within preferences/js to house these 6 divisions, and split up the files which have mixed content

        