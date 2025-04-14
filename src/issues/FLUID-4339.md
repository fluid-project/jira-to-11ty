---json
{
  "title": "FLUID-4339",
  "summary": "UIO separated panel: the dropdown options of \"text style\" and \"colour and contrast\" are not styled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michelle D'Souza",
  "reporter": "Cindy Li",
  "date": "2011-07-13T13:28:35.992-0400",
  "updated": "2024-07-22T14:04:23.794-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4495/",
      "key": "FLUID-4495"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-07-13T13:40:18.448-0400",
      "body": "The css classes that are used to style drop down list options are from fluid.uiEnhancer.options.classnameMap, which is supplied thru demands blocks @ <https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uiOptions/js/UIOptions.js#L228-244>\n\nFat panel has its own demands blocks to overwrite the ones above @ <https://github.com/fluid-project/infusion/blob/master/src/webapp/components/uiOptions/html/FatPanelUIOptionsFrame.html#L74-90>, which is a spot worth to look at to ensure:\n\n1\\. Th demands blocks are resolved successfully\\\n2\\. The values in classnameMap passed in from the demands blocks are expected.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-21T17:05:49.992-0400",
      "body": "Seems like FatPanelUIOptions.js line 114 resets the text style. It calls UIEnhancer.js line 152\\~154 to update the model to the settingsStore.  Could it be that the UpdateModel is not applying settings correctly?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-09T14:13:04.671-0400",
      "body": "\"colour and contrast\" no longer uses a drop down.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T14:04:23.794-0400",
      "body": "There is little to no support for styling the options of a select element.\n"
    }
  ]
}
---
To produce:

1\. go to <http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>\
2\. click "show display preferences" to open the ui options fat panel\
3\. click on drop down list box for "text style" setting. The options in the drop down should be styled in the corresponding font but they are not\
4\. the same issue with drop down list box for "colour and contrast" setting

        