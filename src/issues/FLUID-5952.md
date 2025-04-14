---json
{
  "title": "FLUID-5952",
  "summary": "SeparatedPanelPrefsEditor tests fail on Firefox 48",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Giovanni Tirloni",
  "date": "2016-09-08T16:45:09.434-0400",
  "updated": "2016-09-28T09:06:48.923-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": "Fedora 24, Firefox 48\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-16T09:20:43.521-0400",
      "body": "Potentially this issue could be related to this jQuery issue ( <https://bugs.jquery.com/ticket/15098> ). The jQuery issue has been fixed, but we are on an older version of jQuery which would still be affected. After <https://fluidproject.atlassian.net/browse/FLUID-5825#icft=FLUID-5825> is addressed we should re-evaluate this issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-09-22T08:40:12.847-0400",
      "body": "An example of how this can be tested.&#x20;\n\n<https://www.pastery.net/hwpxts/>\n\nNote: the line \"vagrant snapshot restore just-provisioned\", can be omitted.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-09-28T09:05:09.408-0400",
      "body": "Cannot reproduce issue any more using the master branch (Fedora 24 host, Firefox 49).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-09-28T09:06:48.920-0400",
      "body": "After upgrading to the latest jQuery and jQuery UI ( <https://fluidproject.atlassian.net/browse/FLUID-5825#icft=FLUID-5825> ) this issue can no longer be reproduced. It's likely that it was resolved with changes to jQuery.\n"
    }
  ]
}
---
```
Framework Tests: ./framework-tests/preferences/html/SeparatedPanelPrefsEditor-test.html (2, 65, 67)Rerun4149 ms

    Separated panel integration tests: Separated panel integration tests: IFrame is invisible and keyboard inaccessible - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path templateLoader - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path messageLoader - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path slidingPanel - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path iframeRenderer - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path iframeRenderer.iframeEnhancer - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button is invisible - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path textSize - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path lineSpace - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path textFont - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path contrast - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path layoutControls - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Expected component at path linksControls - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has the button role - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has correct aria-controls - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has correct aria-pressed - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has the group role - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has the correct aria-label - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has correct aria-expanded - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button has the button role - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button has correct aria-controls - at sequence position 1 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: enhancerModel from bwSkin - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button is visible - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has the button role - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has correct aria-controls - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Hide/show button has correct aria-pressed - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has the group role - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has the correct aria-label - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Panel has correct aria-expanded - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button has the button role - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button has correct aria-controls - at sequence position 4 of 11
    Separated panel integration tests: Separated panel integration tests: Reset button is invisible - at sequence position 6 of 11
    Separated panel integration tests: Separated panel integration tests: Only the changed preferences are saved - at sequence position 6 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: iframeEnhancerModel from bwSkin - at sequence position 8 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: iframeEnhancerModel from enhancerModel - at sequence position 8 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: enhancerModel from defaults - at sequence position 11 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: iframeEnhancerModel from defaults - at sequence position 11 of 11
    Separated panel integration tests: Separated panel integration tests: Model correctly updated: enhancerModel from iframeEnhancerModel - at sequence position 11 of 11
    Separated panel munging integration tests: Separated panel munging integration tests: Times font is set - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: The default test theme is set - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: There are 5 elements in the text font string list - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: The first text font string value matches - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: The fifth text font string value matches - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: There are 5 elements in the text font control value list - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: The first text font control value matches - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: The fifth text font control value matches - at sequence position 1 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: classnameMap transferred to outer UIEnhancer - at sequence position 2 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: classnameMap transferred to inner UIEnhancer - at sequence position 2 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: Preferences EditorPanel is hidden - at sequence position 2 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: Preferences EditorPanel is shown - at sequence position 2 of 2
    Separated panel munging integration tests: Separated panel munging integration tests: Iframe selector is transferred in - at sequence position 2 of 2
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_lineSpace should not be instantiated - at sequence position 1 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_magnification should not be instantiated - at sequence position 1 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_lineSpace should be instantiated - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The context for fluid_tests_composite_pref_lineSpace should be retained - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The container for fluid_tests_composite_pref_lineSpace should exist - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The input for fluid_tests_composite_pref_lineSpace should exist - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_lineSpace should be rendered - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_magnification should be instantiated - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The context for fluid_tests_composite_pref_magnification should be retained - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The container for fluid_tests_composite_pref_magnification should exist - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The input for fluid_tests_composite_pref_magnification should exist - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_magnification should be rendered - at sequence position 4 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_lineSpace should not be instantiated - at sequence position 6 of 6
    Prefs editor with composite panel: Rendering: The fluid_tests_composite_pref_magnification should not be instantiated - at sequence position 6 of 6
    Prefs editor with composite panel: Rendering: NS_ERROR_NOT_AVAILABLE: 
    Expected: 	

    undefined

    Source: 	

    runLoggingCallbacks@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:1609:4
    .pushFailure@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:996:3
    window.onerror@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:1242:4

    Prefs editor with composite panel: Rendering: Expected 14 assertions, but 15 were run
    Expected: 	

    undefined

    Source: 	

    runLoggingCallbacks@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:1609:4
    .pushFailure@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:996:3
    Test.prototype.finish@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:244:4
    run/<@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:371:5
    process@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:1457:4
    QUnit.start/<@http://localhost:7357/7804/tests/lib/qunit/js/qunit.js:483:5
```

        