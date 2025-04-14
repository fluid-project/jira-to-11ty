---json
{
  "title": "FLUID-6098",
  "summary": "Refactor InlineEdit so that it uses a model component idiom",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-12-18T00:23:22.979-0500",
  "updated": "2017-01-11T12:31:19.698-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4734/",
      "key": "FLUID-4734",
      "summary": "Straightforward improvements to InlineEdit implementation"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5348/",
      "key": "FLUID-5348",
      "summary": "InlineEdit can have two tooltips show up at the same time for the same field"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5996/",
      "key": "FLUID-5996",
      "summary": "Height of Inline Edit input control used for editing does not scale with font size"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5998/",
      "key": "FLUID-5998",
      "summary": "Focus is not visible after pressing Escape on an active Inline Edit"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6016/",
      "key": "FLUID-6016",
      "summary": "Focus not on an element after making a selection in dropdown inline edit"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6040/",
      "key": "FLUID-6040",
      "summary": "NVDA does not automatically change to forms mode when entering an inline edit"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6049/",
      "key": "FLUID-6049",
      "summary": "undo/redo should have a controls relationship with the inline edit."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6050/",
      "key": "FLUID-6050",
      "summary": "Need to manually switch to forms mode in NVDA to trigger undo/redo button"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6058/",
      "key": "FLUID-6058",
      "summary": "Tooltip remains over the drop-down inline edit options"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6039/",
      "key": "FLUID-6039",
      "summary": "Inline edit tooltip and instructions overlay"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6005/",
      "key": "FLUID-6005",
      "summary": "Spelling error of the word \"press\" in the instructions section for the inline edit dropdown manual test"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6059/",
      "key": "FLUID-6059",
      "summary": "Tooltip blocks edit button for Rich Text inline edit"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5991/",
      "key": "FLUID-5991",
      "summary": "RTE Inline Edit demo - ARIA log is visible at bottom of page"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6029/",
      "key": "FLUID-6029",
      "summary": "Spelling error of the word \"itself\" in the description"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T00:26:29.780-0500",
      "body": "A prerequisite for this work is the basic tidyup that has been on the table as <https://fluidproject.atlassian.net/browse/FLUID-4734#icft=FLUID-4734> for a while.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-12-18T00:27:34.523-0500",
      "body": "Reworking the tooltip relationship so it is sane should have the effect of fixing <https://fluidproject.atlassian.net/browse/FLUID-5348#icft=FLUID-5348>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-11T12:31:19.698-0500",
      "body": "Linking all of the recently filed Inline Edit related issues.\n"
    }
  ]
}
---
Our InlineEdit component is very crusty and has received no substantial reworking since it stabilised around 2009 as part of the Infusion 1.2 release - apart from being lightly dusted over during 2015 to ensure that it continued to function as before after the major framework upgrade.

We need to substantially rewrite this component to being it in line with expectations for modern framework components. Although it has a model and stores its value in it, it makes no use of the ChangeApplier idiom for coordinating updates, but instead relies on a raft of custom events and methods such as "updateModelValue". This makes it useless when cooperating in a tree with other components using modern features such as model relay etc.

We should deprecate and remove these methods, and ensure that the component is at least basically usable when addressed directly via its model, and update all of its implementation (and that of the "undo decorator") to work in terms of modelListeners.

We can also take the opportunity to rework its event binding to function using modern priority and namespace-driven primitives.

We should also correct a horrifying bug caused by its use of a "free constructor" for its tooltips, that will then survive after the destruction of the overall component (we didn't really go in for destroying components back in the old days).

A further useful refactoring would be to establish a "very lazy" instantiation idiom - we should factor off the basic hover and invitation actions into a "component-free" package such that the actual component construction can be deferred until the point the user has started to interact with the editable value.

Finally, we should take the opportunity to assess any interaction paths that were inserted to work around the oddities of ancient browsers which no longer exist, and remove them.

        