---json
{
  "title": "SJRK-386",
  "summary": "Story Tool: Resizing blocks allows them to stretch outside of tool frame",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Dana",
  "date": "2020-08-11T15:35:42.294-0400",
  "updated": "2020-08-12T12:59:02.002-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-386/story tool out of frame.png",
      "filename": "story tool out of frame.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-386/story tool out of frame 2.png",
      "filename": "story tool out of frame 2.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-08-12T12:59:02.002-0400",
      "body": "I think this resizing ability is the default behaviour in most web browsers rather than something we added intentionally, so we'll have to look into whether it can be removed outright. At the very least, we should be able to set the maximum and minimum width of these fields to the same value, so it can only be resized vertically.\n\nI would lean towards option 1, given those two choices.\n"
    }
  ]
}
---
Grabbing and dragging the handle at the bottom right corner of any story block allows the whole block to be stretched outside of the story tool frame. It also allows vertical resizing. Also, grabbing the bottom right corner of the bottom text field in any block allows resizing of the text field, which can also cause the whole block to be stretched outside the tool frame. The text field can also be made narrower than the tool frame to the point where the content is no longer visible. 

It should not be possible to stretch a block outside the tool frame or to resize the width of a block to be narrower than the tool frame in this way.

This relates to another issue - adding text content to a block should resize the block vertically such that all the text content is visible, rather than forcing the author to scroll through the text content block within a story block as it is now (JIRA TBD). Allowing vertical resizing of a block or field is one solution to this, but is not sufficient.

Question - what was the design motivation for adding a resizing handle to the blocks/fields?

Option 1: do not allow any resizing of blocks (remove handle) -  and resize text fields vertically as text is added, such that all text content is visible (see JIRA TBD).

Option 2: resize the tool frame to fit the width of the widest resized block. In this case allow vertical resizing within the tool frame as well.

I think Option 2 could get complicated, with multiple blocks all at different widths within the tool. Unless we are supporting more complex layouts with columns/grids, I don't think this is useful.

        