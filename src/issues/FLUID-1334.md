---json
{
  "title": "FLUID-1334",
  "summary": "reorderer - cursor and avatar location out of synch",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-08-27T16:22:58.000-0400",
  "updated": "2008-12-17T17:26:49.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1335/",
      "key": "FLUID-1335",
      "summary": "Drop target based on position of pointer instead of avatar"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1334/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T08:24:56.000-0400",
      "body": "added some other OS's that the issue occurs in\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T09:44:24.000-0400",
      "body": "'screenshot-1' shows the portlet avatar. Notice how far off to the right the pointer is while dragging the avatar.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:33:20.000-0400",
      "body": "This is another aspect of the pointer offset issue <https://fluidproject.atlassian.net/browse/FLUID-1335#icft=FLUID-1335> and should be corrected at the same time.\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-09-16T21:45:08.000-0400",
      "body": "If the portlet shrinks when picked up, the avatar should shrink towards the pointer so it remains \"attached\" to the pointer.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:58:44.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T12:11:53.000-0500",
      "body": "Bug Parade  0.6 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-10T14:14:04.000-0500",
      "body": "This is really an issue based on being unable to control the avatar size relative to its visible area. We now make efforts, where the \"cloning\" strategy use used to make the avatar, to set its CSS size to the original size - however, for this particular sample, the markup is organised in such a way that it does not respond to this width specification, this resulting in a mismatch between the visual appearance of the avatar and its actual measured size. Therefore I am assigning this to a markup/CSS wizard for attention 😛\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-12T09:41:20.000-0500",
      "body": "A question - who is responsible for the CSS - the component of the implementor?\n\nSetting  the direct descendants of '.ui-draggable-dragging' to 100% width fixes this - but not sure how feasible that is.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-12-12T11:09:39.000-0500",
      "body": "Removed fixed width, should now stretch to avatar container\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T17:33:00.000-0500",
      "body": "This seems good now. There's still weirdness in IE if there's scrolling, but I think that's been there for a long time. It's disconcerting if you try to pick the Image Reorderer portlet up when it's mostly off screen.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T22:29:55.000-0500",
      "body": "There is an issue with the avatar not being the correct size in Safari 3.1. In talking with Jacob, it seems that this is due to the fact that the container sizes are wrong for Safari.\n\nFiled as <https://fluidproject.atlassian.net/browse/FLUID-1972#icft=FLUID-1972>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T22:33:30.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-17T17:21:49.000-0500",
      "body": "WIN: IE6, IE7\n\nTop distance between cursor and avatar proportional to height of portlet/avatar. Short portlets cursor remains on avatar on the correlate spot drag was initiated on portlet. On tall portlets, distance at top  between cursor and avatar increases.&#x20;\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-17T17:26:49.000-0500",
      "body": "Safari 3.2\\\nAvatar size seems off. Some avatars are a fraction of the size as their correlates (Calendar). Some are larger that the viewport (Bookmarks Portlet)\n"
    }
  ]
}
---
To reproduce - on the UPortal layout customizer - grab a wide portlet and drag - for maximum effect grab the portlet on the far right. While dragging the portlet will appear to the left of the cursor, quite a ways. This may be a function of a shrunken avatar. The cursor remains where the portlet would be if it had not shrunk.

        