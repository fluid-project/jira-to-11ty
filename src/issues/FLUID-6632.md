---json
{
  "title": "FLUID-6632",
  "summary": "Prefs Framework tests failing in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2021-06-24T13:39:05.631-0400",
  "updated": "2021-06-24T15:37:54.235-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Safari 14 (macOS 11.4, iPad OS 14.6)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-06-24T15:37:54.233-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1054) that fixes this issue has been merged at [this commit](https://github.com/fluid-project/infusion/commit/3c413df7b31e33fe778e481d62a746f7001d2a3a).\n"
    }
  ]
}
---
The following Prefs Framework unit tests fail in Safari.

* SeparatedPanel Preferences Editor Test Suite
  * Separated panel munging integration tests: Separated panel munging integration tests
    * Assertion failure (see console.log for expanded message): Instantiation of view component with type fluid.prefs.separatedPanel failed, since selector ",.flc-prefsEditor-separatedPanel," did not match any markup in the document
* Full Preview PrefsEditor Test Suite
  * FullPreviewPrefsEditor Tests: fluid.prefs.fullPreview Munging Integration tests
    * Assertion failure (see console.log for expanded message): Instantiation of view component with type fluid.prefs.fullPreview failed, since selector ",#myPrefsEditor," did not match any markup in the document
* UI Enhancer Test Suite (only in iPad OS)
  * Test line height unit: Line Height Unit

        