---json
{
  "title": "FLUID-5862",
  "summary": "InlineEdit test fails on Microsoft Edge",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2016-02-11T08:31:10.519-0500",
  "updated": "2016-09-14T16:07:10.732-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Windows 10\\\nMicrosoft Edge 25.10586.0.0\\\nMicrosoft EdgeHTML 13.10586\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-09-14T16:07:10.634-0400",
      "body": "All tests pass now!&#x20;\n\nMicrosoft Edge 38.14393.0.0\\\nMicrosoft EdgeHTML 14.14393\n"
    }
  ]
}
---
InlineEdit is the only tests from all-tests.html that is failing on Microsoft Edge at this moment.

```
----------------------------------------

InlineEdit Tests: Edit Finish (1, 8, 9)Rerun32 ms1.Initially display field is visible
2.Initially edit field is hidden
3.After edit, display field is hidden
4.After edit, edit field is visible
5.After edit, edit field has the same text as display field
6.After finish, display field is visible
7.After finish, edit field is hidden
8.After finish, display field contains new text
9.When not in edit mode, textEditButton is visibleSource:     at pok (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit.js:110:9)
   at testFns.isVisible (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit-browser.js:39:13)
   at Anonymous function (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:301:13)
 

----------------------------------------

InlineEdit Tests: Keyboard Navigation Edit (2, 12, 14)Rerun46 ms1.TextEditButton is tabbable
2.Initially display field is not focused
3.After focus, display and textEditButton are focussed
4.Before enter pressed, display field is visible
5.Before enter pressed, edit field is hidden
6.Before enter pressed, button is visibleSource:     at pok (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit.js:110:9)
   at testFns.isVisible (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit-browser.js:39:13)
   at Anonymous function (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:339:13)
 

7.After enter pressed, edit field contains same text as display field
8.After enter pressed, button is hidden
9.After changing text and pressing enter, display field is visible
10.After changing text and pressing enter, display has displayModeContainer style
11.After changing text and pressing enter, edit field is hidden
12.After changing text and pressing enter, display field contains new text
13.After enter pressed, button is visibleSource:     at pok (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit.js:110:9)
   at testFns.isVisible (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit-browser.js:39:13)
   at Anonymous function (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:353:13)
 

14.After blur, display field is not focused

----------------------------------------

InlineEdit Tests: Click on display (1, 6, 7)Rerun29 ms1.Initially, display field is visible
2.Initially, textEditButton is visibleSource:     at pok (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit.js:110:9)
   at testFns.isVisible (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit-browser.js:39:13)
   at assertDisplayModeVisibility (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:378:13)
   at Anonymous function (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:397:13)
 

3.Initially, edit field is hidden
4.After click, display field is hidden
5.After click, textEditButton is hidden
6.After click, edit field is visible
7.After click, edit field contains same text as display field

----------------------------------------

InlineEdit Tests: Click on textEditButton (1, 6, 7)Rerun31 ms1.Initially, display field is visible
2.Initially, textEditButton is visibleSource:     at pok (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit.js:110:9)
   at testFns.isVisible (http://build.fluidproject.org/infusion/tests/test-core/jqUnit/js/jqUnit-browser.js:39:13)
   at assertDisplayModeVisibility (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:378:13)
   at Anonymous function (http://build.fluidproject.org/infusion/tests/component-tests/inlineEdit/js/InlineEditTests.js:410:13)
 

3.Initially, edit field is hidden
4.After click, display field is hidden
5.After click, textEditButton is hidden
6.After click, edit field is visible
7.After click, edit field contains same text as display field
```

        