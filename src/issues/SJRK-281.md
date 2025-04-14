---json
{
  "title": "SJRK-281",
  "summary": "Provide user feedback when a block is added",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Gregor Moss",
  "date": "2019-09-09T15:08:46.602-0400",
  "updated": "2020-08-31T10:21:52.718-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-281/badge.png",
      "filename": "badge.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-281/notification.png",
      "filename": "notification.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-281/status area.png",
      "filename": "status area.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-11T09:16:26.426-0400",
      "body": "Some potential options for the feedback\n\n* provide a live region to notify ATs of the change, and add badges to the icons for adding blocks that indicate the number of blocks present.\n* use the \\[Notification API|<https://developer.mozilla.org/en-US/docs/Web/API/notification>]\n* add a \"status\" region on UI to display notifications. This will also be used by ATs\n* add status updates as a dialog\n  * can be cleared by the user\n  * Automatic removal options\n    * never, can only be removed by user\n    * after some time\n    * when a new update is received, it replaces the previous one\n    * replaced on update or removed after some time\n"
    },
    {
      "author": "Justin Obara",
      "date": "2019-09-11T11:04:35.762-0400",
      "body": "* badge.png is a screenshot of an example using badges to indicate number of blocks per type.\n* notification.png is a screenshot of an example using the Notification API to spawn an OS notification\n* \"status area.png\" is a screenshot of an example using a status area for updates.\n"
    },
    {
      "author": "Dana",
      "date": "2020-08-20T14:57:07.765-0400",
      "body": "Design ideas\n\n* maintain a total block count that increases each time a block is added. This could also include a block-type breakdown\n* have a notification panel that could also act as a history (if the notifications persist) - need to make sure the new notification is highlighted when added\n* use some kind of animation to show the block being added, that emerges from the button or from the top of the tool frame\n* active state for block buttons could be more prominent - a '+' sign or checkmark appears? (rather than or in addition to the button changing colour)\n* have a zoomed-out panel view of the story, showing thumbnails of all the blocks. This could scroll up as blocks are added beyond the bottom of the frame\n"
    },
    {
      "author": "Dana",
      "date": "2020-08-26T14:58:36.086-0400",
      "body": "Gregor's notes from crit: <https://docs.google.com/document/d/11NQcq237gHCno0agYZpWWCWEzvICT7d1qtXKs_JABAQ/edit?usp=sharing>\n\n \n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-08-31T10:21:52.718-0400",
      "body": "Similar to the last point a couple of comments up, maybe have an outline view similar to a Google Doc. Although for Google Docs, I think it only shows headings. The thumbnails idea also sounds similar to the minimal in editors like Atom and VisualStudio Code. (see: <https://atom.io/packages/minimap>)\n"
    }
  ]
}
---
Provide user feedback when a block is added in a way that helps them find it, e.g. "Image block added below"

        