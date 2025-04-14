---json
{
  "title": "VP-2",
  "summary": "Volume button should be inverted colours when slider in use",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "heidi valles",
  "date": "2012-10-30T12:46:32.258-0400",
  "updated": "2013-01-28T09:25:20.261-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/VP-121/",
      "key": "VP-121",
      "summary": "Volume button styling should be the same as hover when the volume is being changed"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VP/VP-2/Screen Shot 2012-10-30 at 12.45.01 PM.png",
      "filename": "Screen Shot 2012-10-30 at 12.45.01 PM.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2012-10-30T12:47:24.989-0400",
      "body": "volume button should be yellow bg with black icon\n"
    },
    {
      "author": "heidi valles",
      "date": "2012-10-31T16:59:20.071-0400",
      "body": "After a chat with Michelle clarifying J's mockups, the button should only change when the slider is active, which is I think only do-able with javascript (if slider handle is focused, change style on mute button). Not sure we want to do this right now.\n\nI did fix the style so that the hover style applies when hovering over slider. However, wb and yb don't have hover-styles for the mute button (the default/other themes give a fadey border).\n"
    },
    {
      "author": "heidi valles",
      "date": "2012-12-12T14:22:32.836-0500",
      "body": "The styling happens when the volume container is focused. This works fine for keyboard users, but when accessing the slider via mouse, the container doesn't seem to contain the slider, and the focus styling doesn't apply.\n\nOverall, colours/shadowing/icons for the buttons, when active/hover, should be revisited to add consistency across the themes.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-01-21T15:23:10.822-0500",
      "body": "Very likely the same issue. The button does not take the hover style when the slider is in use.\n"
    }
  ]
}
---
Change image when slider is in use, as per J's mockups.

Note: This applies to the **button** that activates the slider. The colours of the button are not inverted.

        