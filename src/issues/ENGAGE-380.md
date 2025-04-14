---json
{
  "title": "ENGAGE-380",
  "summary": "In Voice Over, the Object Code Entry buttons are being read simply as \"Button\"",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-02-12T14:52:13.000-0500",
  "updated": "2014-03-03T13:47:26.354-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Object Code Entry"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/ENGAGE-393/",
      "key": "ENGAGE-393"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-347/",
      "key": "ENGAGE-347",
      "summary": "Object code entry keypad uses images, not text"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-380/ENGAGE-380.patch.txt",
      "filename": "ENGAGE-380.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-16T15:19:42.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-17T15:14:35.000-0500",
      "body": "I have attached the patch <https://fluidproject.atlassian.net/browse/ENGAGE-380#icft=ENGAGE-380>.patch.txt which allows the buttons to be announced as the correct button using voiceover. However, when voiceover is on, the buttons do not fire their click event. This means that the code entry doesn't take place. If voiceover is turned of, the buttons function correctly.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-18T11:09:33.000-0500",
      "body": "Justin has been troubleshooting and attempting to fix this issue, so I've assigned it to him.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-22T17:40:03.000-0500",
      "body": "The buttons now both announce as the correct button and function. It seems the issue I was stumped on was that when I switched to making them with the role of button and a label. I didn't move the styling from the image to the surrounding anchor. Once that was done, it now seems to work.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T19:35:52.000-0500",
      "body": "I'd like to make a minor tweak to Justin's excellent fix for this issue--we no longer need rsf:id=\"scr=null\" attributes on anchors with hashes for their href.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-22T19:38:55.000-0500",
      "body": "I've committed a minor tweak to Justin's fix. I tested his changes and reviewed them, and they look great. +1. Justin can you review my changes real quick and close this ticket if you're happy?\n"
    }
  ]
}
---
Buttons are being read as "Button"

Currently in voiceover on the iphone all of the buttons are being read only as "Button" this means that a user would not be able to know what that button was actually inputing.

        