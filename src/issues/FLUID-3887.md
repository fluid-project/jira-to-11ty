---json
{
  "title": "FLUID-3887",
  "summary": "Rich Inline Edit creates a misleading hover style and tooltip",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2010-12-09T12:39:36.496-0500",
  "updated": "2011-02-14T13:37:26.683-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3911/",
      "key": "FLUID-3911",
      "summary": "Rich text inline edit demo - keyboard can activate edit on entire field, but mouse activates on Edit link only."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3887/FLUID_3887-b.patch",
      "filename": "FLUID_3887-b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3887/FLUID-3887.patch",
      "filename": "FLUID-3887.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-09T13:49:10.409-0500",
      "body": "Patch to fix misleading tooltip text.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-15T16:46:23.161-0500",
      "body": "Tooltip text is appropriate for keyboard users, but not mouse users. This is because the interactions are different for both.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-21T17:33:32.501-0500",
      "body": "Heidi and Jess, can you work together on this issue once you've finished the higher-priority Uploader issues (including the FSS demo of the scrollable table classes)?\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-26T17:06:16.457-0500",
      "body": "Commented out rich text invitation style and edited the hover text. Basic fix. Working now on making it look like James's mockup from <https://fluidproject.atlassian.net/browse/FLUID-3801#icft=FLUID-3801> to see if it won't take too much more time.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-01-31T10:17:23.272-0500",
      "body": "Hey Jon, could you check this one over and review the code before committing? Thanks!&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-02-09T16:39:50.141-0500",
      "body": "Hi Heidi, Justin, Michelle and I took a look at your patch for this issue and have two suggestions:\n\n1\\. We should avoid commenting out code, and instead remove it entirely if it's no longer necessary. \\\n2\\. Can you have James or Jess review the invitation text to make sure it's awesome for users?\n\nJustin will commit the patch once you've had a chance to make those changes.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-10T13:05:48.397-0500",
      "body": "branch with fixes up at <https://github.com/heidiv/infusion/tree/FLUID-3887>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-11T15:41:56.711-0500",
      "body": "Pushed Heidi's changes at 0eeadd6682a72c9cd4c0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-11T15:42:00.165-0500",
      "body": "Pushed Heidi's changes at 0eeadd6682a72c9cd4c0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-14T13:36:19.875-0500",
      "body": "just reopening to change the resolution to resolved\n"
    }
  ]
}
---
The Rich Text Inline Edit component produces a highlight that implies that an entire container is clickable, while only the button is clickable.&#x20;

However, the tooltip text is accurate for keyboard interaction since you can press enter when the highlight appears to enter Edit mode. (See Fluid-3911).

Also, the tooltip appears when hovering over this larger region and states that you can click anywhere to Edit - which is incorrect.

        