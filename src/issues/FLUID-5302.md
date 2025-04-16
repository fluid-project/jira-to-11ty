---json
{
  "title": "FLUID-5302",
  "summary": "Keyboard-a11y demo not working in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Anastasia Cheetham",
  "date": "2014-04-08T15:10:20.942-0400",
  "updated": "2015-06-15T14:33:51.720-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "Safari 6.1.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T14:33:51.718-0400",
      "body": "Could not reproduce in the latest version of Safari (8)\n"
    }
  ]
}
---
In the current Safari, using master, the keyboard-a11y demo doesn't work. The images load, etc., but there's no keyboard access within the page at all, and the mouse interactions are also not functioning at all.

The console shows two errors, pasted below. I have not been able to spend time tracking this down.

\[Error] TypeError: Attempted to assign to readonly property. (Fluid.js, line 1461)

\[Error] TypeError: Attempted to assign to readonly property.\
identifyListener (Fluid.js, line 997)\
impersonateListener (Fluid.js, line 1004)\
dispatchListener (FluidIoC.js, line 1701)\
(anonymous function) (FluidIoC.js, line 1754)\
transformInternal (Fluid.js, line 419)\
transform (Fluid.js, line 440)\
resolveListenerRecord (FluidIoC.js, line 1724)\
(anonymous function) (Fluid.js, line 1250)\
each (Fluid.js, line 463)\
mergeListeners (Fluid.js, line 1231)\
initLittleComponent (Fluid.js, line 2145)\
initView (FluidView\.js, line 251)\
invokeGlobalFunction (Fluid.js, line 944)\
initComponent (Fluid.js, line 2220)\
creator (Fluid.js, line 1558)\
setUpFiveStarRanker (keyboardDemo.js, line 175)\
initImageViewer (keyboardDemo.js, line 214)

        