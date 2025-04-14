---json
{
  "title": "FLUID-4182",
  "summary": "Figure out what fl-icon is doing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "heidi valles",
  "date": "2011-04-07T16:12:02.652-0400",
  "updated": "2011-04-26T15:03:25.273-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4181/",
      "key": "FLUID-4181",
      "summary": "Update approach to fl-offScreen-hidden to not use negative text-indent"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-04-12T13:19:33.860-0400",
      "body": "Seems to be based off of jquery ui's ui-icon class:\n\n.ui-icon: Base class to be applied to an icon element. Sets dimensions to 16px square block, hides inner text, sets background image to \"content\" state sprite image. Note: .ui-icon class will be given a different sprite background image depending on its parent container. For example, a ui-icon element within a ui-state-default container will get colored according to the ui-state-default's icon color.\n\nAfter declaring a \".ui-icon\" class, you can follow up with a second class describing the type of icon you'd like. Icon classes generally follow a syntax of .ui-icon-{icon type}~~{icon sub description}~~{direction}. For example, a single triangle icon pointing to the right looks like this: .ui-icon-triangle-1-e&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T14:19:37.647-0400",
      "body": "fl-icon in fss-layout.css doesn't seem to be used at all in any of the demos etc. But it seems to just establish a 16x16 space, and move the text out. A user would then add another style for their particular icon image to be dropped into this space. The benefits of doing this vs. just having an image with alt-text: themes can replace the image with the normally hidden text.&#x20;\n\nfl-icon seems to be used differently in fss-mobile-layout.css where it's just used to establish icon sizes.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-04-12T16:05:58.983-0400",
      "body": "TO DO: .fl-theme-hc .fl-widget .fl-icon  AND  .fl-theme-hci .fl-widget .fl-icon should be changed in both theme files to not require the icon be within .fl-widget.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-04-26T15:03:25.271-0400",
      "body": "This has been pushed into the project repo at efe30ec57ff1a3be3400b6dff986b683678c4bdb\n"
    }
  ]
}
---
What is it? Do we need it? Does it work as it should?&#x20;

It is using text-indent.

        