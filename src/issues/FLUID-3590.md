---json
{
  "title": "FLUID-3590",
  "summary": "Tab behavior on reorderable elements is sometimes inconsistent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "James Yoon",
  "date": "2010-04-01T16:20:30.000-0400",
  "updated": "2014-03-03T13:43:40.364-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Safari 4 (OS X 10.5)\\\nFF 3.6 (Win XP, Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3590/debugFocus.patch",
      "filename": "debugFocus.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3590/FLUID-3590.patch",
      "filename": "FLUID-3590.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3590/fluid-3590-keyboard-a11y.patch",
      "filename": "fluid-3590-keyboard-a11y.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3590/gridReorderer.patch",
      "filename": "gridReorderer.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-07T12:14:31.000-0400",
      "body": "UPDATED Results based on tests of Infusion 1.1.2 and the current trunk version.\n\nSafari 4 (Mac OS 10.6)\\\n\\======================\n\nGrid Reorderer:\n\n1.1.2 - tab (and option-tab) get stuck at first element. Shift-tab (and options-shift-tab) works\n\ncurrent - same as 1.1.2\n\nImage Reorderer:\n\n1.1.2 - same as grid reorderer except option-tab will put focus on each of the images on the first time through.\n\ncurrent - same as 1.1.2\n\nLayout Reorderer:\n\n1.1.2 - same as Image Reorderer except using tab has the same focusing issues as option-tab and shift-tab (and option-shift-tab) always cycles through all of the elements.\n\ncurrent - same as 1.1.2\n\nList Reorderer:\n\n1.1.2 - same as Grid Reorderer\n\ncurrent - same as 1.1.2\n\nFF 3.5 (Win XP)\\\n\\================\n\nGrid Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nImage Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nLayout Reorderer:\n\n1.1.2 - tab and shift-tab put focus on each element\n\ncurrent - same as 1.1.2\n\nList Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nIE 7 (Win XP)\\\n\\================\n\nGrid Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nImage Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nLayout Reorderer:\n\n1.1.2 - tab and shift-tab put focus on each element\n\ncurrent - same as 1.1.2\n\nList Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nFF 3.6 (Win XP)\\\n\\================\n\nGrid Reorderer:\n\n1.1.2 - stops on first element\n\ncurrent - can tab off of first element, but pressing tab again returns you to the first element. Holding down tab, will flicker focus on and off of the first element\n\nImage Reorderer:\n\n1.1.2 - same as Grid Reorderer\n\ncurrent - same as Grid Reorderer\n\nLayout Reorderer:\n\n1.1.2 - tab will put focus on each element the first time through and then work properly after that. shift-tab puts focus on each element all the time\n\ncurrent - same as 1.1.2\n\nList Reorderer:\n\n1.1.2 - same as Grid Reorderer\n\ncurrent - same as Grid Reorderer\n\nIE 8 (Win XP)\\\n\\================\n\nGrid Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nImage Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n\nLayout Reorderer:\n\n1.1.2 - tab will put focus on each element the first time through and then work properly after that. shift-tab puts focus on each element all the time\n\ncurrent - same as 1.1.2\n\nList Reorderer:\n\n1.1.2 - works\n\ncurrent - works\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-07T16:54:36.000-0400",
      "body": "Patch to correct debugFocus.js for use with jQuery 1.4.x (and perhaps some previous versions)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-07T16:56:20.000-0400",
      "body": "Patch for gridReorderer.html which includes debugging utilities to show progress of focus. Remove \"tabindex = 1\" from the markup to see a slightly different effect also.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-08T12:15:34.000-0400",
      "body": "This patch appears to resolve the issue on Firefox 3.6 and does not break on IE6. Uploading for testing on other browsers\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-04-08T16:43:03.000-0400",
      "body": "Patch to keyboard-a11y as well as Reorderer, to demonstrate fix to issue in addition to \"mouse dropping cleaning\" using explicit blur\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-09T16:18:29.000-0400",
      "body": "To translate Antranig, we've updated the keyboard-a11y plugin to use the Roaming Tabindex Technique for handling tab focus. Before focusing a new arrow-keyable element, we change its tabindex from -1 to 0. On blur, we change it back to -1, with an additional workaround of manually calling blur() when we programmatically shift focus to a new element.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-09T16:19:28.000-0400",
      "body": "I've committed Antranig's wicked, wicked patch at r9819. Justin and I have tested fairly extensively, but I'd like another quick code review from Michelle just in case I missed anything while linting, etc.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-09T16:19:42.000-0400",
      "body": "Antranig's patch committed at r9819\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-09T16:21:20.000-0400",
      "body": "colinclark: Okay dudes, everyone celebrate!\\\n\\[4:19pm] colinclark: <http://issues.fluidproject.org/browse/FLUID-3590>\\\n\\[4:19pm] colinclark: The last blocker is fixed!\\\n\\[4:20pm] colinclark: michelled will do a triple-check of the code, since removed a few bits of cruft from the Reorderer\\\n\\[4:20pm] jessm: yay\\\n\\[4:20pm] colinclark: And we're good to test the Reorderer\\\n\\[4:20pm] athena: congrats! \\\n\\[4:20pm] colinclark: Huge props to our favourite \"volunteer,\" Bosmon, for fixing this one so fast\\\n\\[4:20pm] jessm:\\\n\\[4:20pm]\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-09T16:23:13.000-0400",
      "body": "More information about the Roaming Tabindex Techinque, in case it's useful in the future:\n\n<http://www.yuiblog.com/blog/2009/02/23/managing-focus/>\n"
    }
  ]
}
---
Tabbing on a page with reorderable elements sometimes has inconsistent behavior. Depending on the combination of the integration and the platform, it may do one of at least the following:

* tabs forward through everything, including the individual reorderable elements, until the end of the list where it gets stuck; additionally, shift-tab will not go through the individual reorderable elements (just one element out of the group)
* tabs forward through everything, including the individual reorderable elements, until the end of the list, but through subsequent tabs will only go through one element out of the group of reorderable elements
* tabs forward through everything, but not the individual reorderable elements (just one element out of the group of reorderable elements), but shift-tabs will go through each individual reorderable element

To replicate, using Safari 4/OS X 10.5:

1\. Go to <http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/html/listReorderer.html>\
2\. Tab forward till you reach the reorderer.\
3\. Try tabbing beyond the reorderer (it doesn't work). Try shift-tabbing to go into reverse (it will work).

To replicate, using Safari 4/OS X 10.5:\
1\. Go to <http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/demo.html>\
2\. Tab forward till you reach the reorderer.\
3\. Keep tabbing forward (it will tab through the individual elements).\
4\. Keep tabbing forward more until you cycle through again (it won't go through the individual elements anymore).\
5\. Shift-tab to go into reverse (it will go through the individual elements).

To replicate, using Safari 4/OS X 10.5:\
1\. Go to <http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/demo.html>\
2\. Tab forward till you reach the reorderer (it doesn't work).\
3\. Keep tabbing forward (it will tab through the individual elements).\
4\. Try tabbing beyond the reorderer (it won't work). Try shift-tabbing to go into reverse (it will work, but only goes through one element, not all individual elements)

        