---json
{
  "title": "FLUID-6765",
  "summary": "SeparatedPanel Prefs Editor Responsive Test fails on recent Chrome when zoomed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2023-03-13T07:37:49.716-0400",
  "updated": "2023-03-13T10:50:52.532-0400",
  "versions": [
    "4.6"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Chrome 109, Windows\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2023-03-13T10:50:52.532-0400",
      "body": "I vaguely remember this, so might not be limited to recent versions of Chrome. \n"
    }
  ]
}
---
When the browser's zoom is anything other than 100%, I get a failure in the responsive test suite at index 40:

\`\`\`\`\
Clicked to go to Panel to the Right: The panel at index 1 should be scrolled into view with offset = 0 - at sequence position 7 of 11\
Expected: 	\
0\
Result: 	\
0.3551136255264282\
Diff: 	\
0 0.3551136255264282 \
Source: 	\
at Object.assertEquals (<http://localhost/source/gits/infusion-master/tests/test-core/jqUnit/js/jqUnit.js:135:19>)\
at HTMLLIElement.\<anonymous> (<http://localhost/source/gits/infusion-master/tests/framework-tests/preferences/js/SeparatedPanelPrefsEditorResponsiveTests.js:174:20>)\
at Function.each (<http://localhost/source/gits/infusion-master/src/lib/jquery/core/js/jquery.js:385:19>)\
at jQuery.fn.init.each (<http://localhost/source/gits/infusion-master/src/lib/jquery/core/js/jquery.js:207:17>)\
at fluid.tests.prefs.responsive.assertPanelVisibility (<http://localhost/source/gits/infusion-master/tests/framework-tests/preferences/js/SeparatedPanelPrefsEditorResponsiveTests.js:170:12>)\
at expanded.apply (<http://localhost/source/gits/infusion-master/tests/test-core/utils/js/IoCTestUtils.js:198:34>)\
at Object.execute (<http://localhost/source/gits/infusion-master/tests/test-core/utils/js/IoCTestUtils.js:255:20>)\
\`\`\`\`

The amount that the scroll offset disagrees with 0 increases as the zoom differs from 100% although it is always positive.

        