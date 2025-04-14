---json
{
  "title": "FLUID-4164",
  "summary": "Upgrade jQuery UI 1.8 to 1.8.11",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Harris Wong",
  "date": "2011-03-29T16:57:56.860-0400",
  "updated": "2011-04-12T16:15:48.761-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [],
  "environment": "N/A\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-03-29T17:23:11.012-0400",
      "body": "Replaced listed files with the ones from 1.8.11.  Changes can be found at my github: <https://github.com/harriswong/infusion/tree/FLUID-4164>\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-03-31T16:54:11.410-0400",
      "body": "Merged with f9df1b1f71446dd2b0ff4f972d2ce04e1680ecde Mar 31, 2011.\\\nEncountered the following problems:\n\n\\=========================\\\nUnit Test failure:  IE8 Windows XP\\\n\\=========================\\\n\\*inlineEdit-test fails on #34.9\\\nUndo container should not be visible\n\n\\*UIOptions, error as follow:\\\nLine: 56\\\nCharacter: 13\\\nCode: 0\\\nError Message: Object doesn't support this property or method\\\nURL: <http://localhost/fluid/fluid-components/src/webapp/framework/core/js/Fluid.js>\n\n\\================================\\\nStateTest on demo failure:  IE8 Windows XP\\\n\\================================\\\n\\*Uploader, error as follow:\\\nLine: 48\\\nCharacter: 3\\\nCode: 0\\\nError Message: Object required\\\nURL: <http://localhost/fluid/fluid-components/src/webapp/demos/uploader/html/uploader.html>\n\n\\*uiOptions, errors as follow:\\\nLine: 136268650\\\nCharacter: 13\\\nCode: 0\\\nError Message: 'selectors' is null or not an object\\\nURL: <http://localhost/fluid/fluid-components/src/webapp/demos/uiOptions/html/uiOptions.html>\n\nLine: 196\\\nCharacter: 13\\\nCode: 0\\\nError Message: 'undefined' is null or not an object\\\nURL: <http://localhost/fluid/fluid-components/src/webapp/components/uiOptions/js/UIEnhancer.js>\n\n\\========================\\\nUnit Test failure:  IE9 Windows 7\\\n\\========================\\\n\\*ImageReorderer UnitTest fails\n\n\\*LayoutReorderer UnitTest 3.10- Temp moved state is cleared\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-04-01T14:48:42.670-0400",
      "body": "Merged with 1d8f205eb0b963ae56862a33587eb895caceaa9e Apr 1, 2011\\\nEncountered the following problems:\n\n\\=========================\\\nUnit Test failure: \\\n\\========================= \\\nChrome, FF, IE8 XP; IE9, FF4, Chrome Win7\\\nTextfieldSlider Test Suite - Fails all\n\nIE8 XP\\\nUI Enhancer Test Suite  - Failed 1.8, 1.9, 2.\\*, 3.5, 4.4\n\n\\*Updated: according to Antranig, these are just leftover versions of the DataBinding dependency from Mar 31, 2011. &#x20;\n\n\\=========================\\\nState Test failure: \\\n\\========================= \\\nFF4, Chrome\\\nUploader Demo not showing upon clicking buttons\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-04-04T16:50:22.909-0400",
      "body": "Merged with be8fe4f46964a6307e6fe7404e81c38c0608a88e Apr 4, 2011. \\\nEncountered the following problems:\\\n\\========================= \\\nUnit Test failure: FF, Chrome, IE8 Windows XP \\\n\\========================= \\\n**src/webapp/tests/component-tests/uiOptions/html/UIEnhancer-test.html 1.2, 1.4, 2.**, 3.\\*, 4.4&#x20;\n\n\\========================= \\\nState Test failure: FF, Chrome, IE8 Windows XP \\\n\\========================= \\\nUploader - clicked on the 3 buttons but nothing happened. \\\nUIOptions Demo Error: target is undefined Source File: <http://localhost/fluid/fluid-components/src/webapp/framework/core/js/Fluid.js> Line: 1060&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-04-05T14:04:56.393-0400",
      "body": "Merged with c3c097713a012dafeb00548d0e480e6ecccc14a4 Apr 5, 2011.\n\nEncountered the following problems:\n\n\\========================\\\nUnit Test failure: IE9 Windows 7\\\n\\========================\\\n\\*ImageReorderer UnitTest fails\n\n\\*LayoutReorderer UnitTest 3.10- Temp moved state is cleared&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-04-05T14:23:08.563-0400",
      "body": "The problems I listed are the same in the master branch.  I don't think those are problems introduced by the jQuery-UI 1.8.11.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-12T16:15:48.759-0400",
      "body": "Merged in Harris' branch at 8fcffe96952baced45585a984bee9af4377473c7\n"
    }
  ]
}
---
Upgrade jQuery UI from 1.8 to 1.8.11

Updating the following files:\
jquery.ui.core.js \
jquery.ui.dialog.js\
jquery.ui.draggable.js\
jquery.ui.mouse.js\
jquery.ui.position.js\
jquery.ui.slider.js\
jquery.ui.widget.js

jQuery official guides for upgrading:\
jQuery Guide from 1.8.10 to 1.8.11: <http://jqueryui.com/docs/Upgrade_Guide/1.8.11>\
jQuery Guide from 1.8 to 1.8.11: <http://jqueryui.com/docs/Upgrade_Guide_18>  (currently empty)

        