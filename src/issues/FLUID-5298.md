---json
{
  "title": "FLUID-5298",
  "summary": "strict mode breaks Infusion components in Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Jonathan Hung",
  "date": "2014-04-01T15:40:32.355-0400",
  "updated": "2014-04-08T15:23:57.333-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": "Safari 7.0.2 (9537.74.9)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5284/",
      "key": "FLUID-5284"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-01T16:20:49.759-0400",
      "body": "From what I can tell it happens when onerec in fluid.annotateListeners is a string instead of an object literal. I suppose this is similar to <https://fluidproject.atlassian.net/browse/FLUID-5297#icft=FLUID-5297> except that it was let through by most browsers because it uses dot notation instead of array notation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-08T15:23:57.313-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/488> ) into the project repo at e77d48f49d07f88e7dff4befc547874da29b6c01\n"
    }
  ]
}
---
Strict mode breaks Infusion components in Safari causing the following error to appear in the console. Disabling strict mode fixes this. Firefox and Chrome in Mac is fine.

\[Error] TypeError: Attempted to assign to readonly property.\
(anonymous function) (Fluid.js, line 1461)\
transformInternal (Fluid.js, line 419)\
transform (Fluid.js, line 440)\
(anonymous function) (Fluid.js, line 1460)\
transformInternal (Fluid.js, line 419)\
transform (Fluid.js, line 444)\
annotateListeners (Fluid.js, line 1458)\
rawDefaults (Fluid.js, line 1476)\
defaults (Fluid.js, line 1530)\
(anonymous function) (OverviewPanel.js, line 24)\
\[Error] TypeError: '\[object Object]' is not a function (evaluating 'fluid.overviewPanel(".flc-overviewPanel")')\
(anonymous function) (overviewPanel.html, line 44)\
fire (jquery.js, line 3099)\
fireWith (jquery.js, line 3211)\
ready (jquery.js, line 3423)\
completed (jquery.js, line 3453)

To reproduce:\
1\. Load any infusion demo (i.e. image reorderer or inline edit) in Safari\
2\. Notice you can't interact with the demo.\
3\. Remove / comment 'use strict' from Fluid.js\
4\. Reload demo in Safari - notice that the demo works.

        