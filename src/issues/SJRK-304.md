---json
{
  "title": "SJRK-304",
  "summary": "Edit page instructions do not hide in Edge after adding first block",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-09T14:18:29.641-0400",
  "updated": "2020-07-27T15:53:57.699-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 v1903\\\nEdge 44\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-304/2019-10-07 ST instructions not hiding in Edge (after).PNG",
      "filename": "2019-10-07 ST instructions not hiding in Edge (after).PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-304/2019-10-07 ST instructions not hiding in Edge (before).PNG",
      "filename": "2019-10-07 ST instructions not hiding in Edge (before).PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-304/2019-10-11 ST instructions and editing area hidden in Edge.png",
      "filename": "2019-10-11 ST instructions and editing area hidden in Edge.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-10-11T13:27:28.793-0400",
      "body": "The hiding and showing of these elements is achieved entirely in CSS using selectors that are supported as far back as IE9, or IE7 in the case of the + (adjacent sibling) selector.\n\nInspecting the instructions element in the Edge DevTools window after adding a new block makes that element hidden, which is quite odd, although the result is what is normally expected. If the newly-added block is then removed, both the instructions **and** the editing area are hidden. Re-inspecting the instruction element at this point will then make it show once more. This leads me to believe it may be a bug within Edge, or some special circumstances that must be met before repainting occurs.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-27T15:53:57.699-0400",
      "body": "We are planning not to support pre-Chromium Edge in the future (affects versions 44.\\* and earlier), so this may not be resolved for affected versions.\n"
    }
  ]
}
---
The instructional message on the editor does not disappear in MS Edge after adding a block to the story. This is likely a lack of support for or problem with the specific CSS and JS used to hide the instructions and show the editing area with the new block.

**To reproduce**: Add a new block

**Expected**: The instructions disappear and the new block is visible

**Actual**: The new block in the editing area is shown, but the instructions are not hidden and show up beneath the editing area

        