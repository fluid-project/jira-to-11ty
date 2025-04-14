---json
{
  "title": "FLUID-6523",
  "summary": "Selection Reader appears when empty areas are selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Gregor Moss",
  "date": "2020-06-30T15:26:15.207-0400",
  "updated": "2020-07-20T07:48:53.563-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Self Voicing"
  ],
  "environment": "Windows 10 Pro v1909,\\\nChrome 83,\\\nInfusion 3.0.0-dev.20191219T155607Z.32876d29c.FLUID-6145\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6531/",
      "key": "FLUID-6531"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6523/2020-06-30 Orator select bug 1.png",
      "filename": "2020-06-30 Orator select bug 1.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6523/2020-06-30 Orator select bug 2.png",
      "filename": "2020-06-30 Orator select bug 2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6523/85486044-e121cf80-b597-11ea-9432-7d1e91da22a3.png",
      "filename": "85486044-e121cf80-b597-11ea-9432-7d1e91da22a3.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-16T08:52:58.334-0400",
      "body": "I investigated the issue with the play button getting selected. Part of the problem here is that when the selection leaves the containing element the browser (Chrome) flips the selection to the play button. This happens as the next event, so there is no intermediate step where the selection has no selection or whitespace. It basically goes from selecting \"selection.\" to \"play\". Therefore the button isn't removed before it has a chance to be selected.\n\nOther potential solutions investigated:\n\n* [user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select)\n  * Set user-select to none. While there is no visual selection of the play button text, and copying of the text is disabled, the selection from window.getSelection() still includes the play button text.\n* [Selection.removeRange()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/removeRange)\n  * I am able to use [Selection.containsNode()](https://developer.mozilla.org/en-US/docs/Web/API/Selection/containsNode) to determine if the play button is included in the selection. From there I am able to create a new Range to pass into the removeRange method. However, this doesn't remove the play button text from the selection. In looking at the example in the documentation it appears that you can only remove ranges that are already included in the selection. In the case illustrated here it is likely going to be a single range for the entire selection.\n\n- Limit the selection to a specific element.\n  * Window.getSelection() can only be called at the window/document level. We'd have to manually parse only the text that is within the specified container elements. This can be difficult when the selection starts/ends outside of our element and if it contains just a portion of a text node. Also it may be confusing for a user that only some of the selection is being read back. If we modify the selection there are other potential issues for the user, e.g visual styling, copying text, etc.\n\n \n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-07-16T15:46:00.200-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1000) that fixes the majority of this issue has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/infusion/commit/8d59c6ce77ed83a0c8c8c70f1195636cfcc02797).\n\nThe remaining issue updated on 2020-07-15 stays open.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-16T15:56:18.146-0400",
      "body": "As requested in @@Cindy Li's comment on the current pull request ([#1000](https://github.com/fluid-project/infusion/pull/1000#issuecomment-659468378)), the issue is reproducible in Windows 10 Pro v1909 using Chrome 83 and Edge 44. That's pre-Chromium Edge, though I suspect it also occurs in newer versions of Edge since it occurs in Chrome.\n\nThe reproduction steps are the same as are listed in the original description.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-20T07:48:53.560-0400",
      "body": "It is still possible to select only the play button. See update 2020-07-15\n"
    }
  ]
}
---
The Selection Reader component of the Orator will show when empty text nodes are selected, even though there is nothing for it to play. In such cases, the Selection Reader should not appear. See the attached screenshots for examples of this.

**To reproduce:**

1. Go to <https://build.fluidproject.org/infusion/demos/orator/>
2. Click and hold with the mouse to select from the end of the word "selection." to the beginning of the "demo code" link

**Expected:**

The Selection Reader should not appear

**Actual:**

The Selection Reader appears

***

**Update 2020-07-15**

The majority of the issue has been solved in PR ( <https://github.com/fluid-project/infusion/pull/1000> ), though the originally-reported issue still persists: the demo page left pane still allows selection of the Selection Reader itself (as shown in the attachment "2020-06-30 Orator select bug 1.png").

        