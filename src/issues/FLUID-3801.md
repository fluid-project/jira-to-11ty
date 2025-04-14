---json
{
  "title": "FLUID-3801",
  "summary": "Design and implement default styles for each Inline Edit flavour",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "James Yoon",
  "reporter": "Mike Lam",
  "date": "2010-10-18T13:50:08.741-0400",
  "updated": "2010-11-30T17:15:53.127-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Inline Edit",
    "Undo"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/FLUID-3801-renameStyles.patch",
      "filename": "FLUID-3801-renameStyles.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_edit_button_16x16.png",
      "filename": "inline_edit_edit_button_16x16.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_edit_button_32x32.png",
      "filename": "inline_edit_edit_button_32x32.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_redo_button_16x16.png",
      "filename": "inline_edit_redo_button_16x16.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_redo_button_32x32.png",
      "filename": "inline_edit_redo_button_32x32.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_redo_highlighted_button_38x40.png",
      "filename": "inline_edit_redo_highlighted_button_38x40.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_undo_button_16x16.png",
      "filename": "inline_edit_undo_button_16x16.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_undo_button_32x32.png",
      "filename": "inline_edit_undo_button_32x32.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/inline_edit_undo_highlighted_button_38x40.png",
      "filename": "inline_edit_undo_highlighted_button_38x40.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/InlineEdit.css",
      "filename": "InlineEdit.css"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/Inline edit mockup.ai",
      "filename": "Inline edit mockup.ai"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/richTextDefaultStyling.txt",
      "filename": "richTextDefaultStyling.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/richTextDefaultStylingRefactored.txt",
      "filename": "richTextDefaultStylingRefactored.txt"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/Rich text inline edit mockup.png",
      "filename": "Rich text inline edit mockup.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/Screen shot 2010-11-25 at 8.00.30 AM.png",
      "filename": "Screen shot 2010-11-25 at 8.00.30 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3801/Simple inline edit mockup.png",
      "filename": "Simple inline edit mockup.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-18T14:03:08.036-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T17:09:22.980-0400",
      "body": "Uploading the mockup and graphics for the default styles provided by James and Jen\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-10-18T17:10:21.977-0400",
      "body": "One more file, the redo button this time\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-02T14:30:10.549-0400",
      "body": "Committed Mike's patch ( patchRefactored.txt ) from <https://fluidproject.atlassian.net/browse/FLUID-3821#icft=FLUID-3821>, which also updated the default styles used for Simple text inlineEdit. More changes still coming for rich text inlineEdit\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-02T15:23:27.636-0400",
      "body": "Created default styling for Rich Text inline edit&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-02T15:44:41.908-0400",
      "body": "Removed duplicate function, over ride textEditButton text instead of creating new string.\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-05T13:15:34.672-0400",
      "body": "hi guys, i've attached a new stylesheet. all i did for .js was change line 542 to remove \"\\<img />\" but there's obviously more to do there. prob remove that function entirely & the img option. will leave that to ya'll.\n\ncss: <http://issues.fluidproject.org/secure/attachment/11313/InlineEdit.css>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-09T14:45:34.995-0500",
      "body": "Committed Heidi's patch ( InlineEdit.css ) as part of the patch ( cssStyleCleanup-2.patch.txt ) for <https://fluidproject.atlassian.net/browse/FLUID-3821#icft=FLUID-3821>.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:00:30.732-0500",
      "body": "James, please review this from the functional perspective. Does the implementation match your expectations?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:01:56.033-0500",
      "body": "There are a couple things that should be done before we close this issue:\n\n1\\)  defaultViewStyle is meant to style an empty InlineEdit field but we no longer ship a style that does this. (line 835 in the javascript code)\\\n2\\)  we should rename fl-inlineEdit-underline and fl-inlineEdit-inlineBlock to communicate the state we are styling instead of the implementation details of the class\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-23T16:08:39.196-0500",
      "body": "Making this issue a blocker because it didn't pass code review but the code is already in trunk.&#x20;\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-11-25T08:28:39.432-0500",
      "body": "I was testing off of the nightly build of the demos, and noticed three things:\n\n1\\. In Safari, a blue border around the inline edit persists after going into edit mode. In Firefox, the same is true, but only for the first inline edit on the demo.\\\n2\\. Justin was demoing to me an updated tooltip for inline edit that that isn't present in the demos--is it supposed to be there?\\\n3\\. The current inline edit doesn't gracefully handle multiple lines of text, as you can see in the screenshot (Screen shot 2010-11-25 at 8.00.30 AM.png) I've attached. It should look like \"Rich text inline edit mockup.png\" for multiple lines of text (additionally, the undo button should appear right after the edit button, not on a separate line).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-25T10:56:07.531-0500",
      "body": "James, here are my comments on your points above.\n\n1\\) this may have to do with the default focus styling in the browser, although the firefox issue seems strange. So there may be a bug here.\n\n2\\) The new tooltip hasn't made it's way into trunk yet. It will be committed against <https://fluidproject.atlassian.net/browse/FLUID-3831#icft=FLUID-3831>\n\n3\\) This has to do with the fact that we are using display: inline-block. We are using that to get the background highlighting to be the correct height.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-29T14:11:15.118-0500",
      "body": "Renamed styles to better communicate the state we are styling.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-11-30T16:32:15.026-0500",
      "body": "I've opened <https://fluidproject.atlassian.net/browse/FLUID-3867#icft=FLUID-3867> and <https://fluidproject.atlassian.net/browse/FLUID-3868#icft=FLUID-3868> which address James's findings 1 and 3.&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-30T17:15:53.125-0500",
      "body": "Code reviewed and committed\n"
    }
  ]
}
---
Design and implement default styles for each Inline Edit flavour&#x20;

* Display mode tooltip styling: larger text, lighter background
* Fatter pencil icon

        