---json
{
  "title": "FLUID-1821",
  "summary": "Image Reorderer has incomplete directions (Accessibility)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Michael Elledge",
  "date": "2008-11-18T14:51:14.000-0500",
  "updated": "2008-12-12T16:22:16.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Image Reorderer",
    "Keyboard Accessibility"
  ],
  "environment": "Firefox 3, JAWS 9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-492/",
      "key": "FLUID-492",
      "summary": "JAWS difficulty exiting Virtual PC Cursor to navigate in Lightbox"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1839/",
      "key": "FLUID-1839"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-492/",
      "key": "FLUID-492",
      "summary": "JAWS difficulty exiting Virtual PC Cursor to navigate in Lightbox"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1970/",
      "key": "FLUID-1970"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1821/FLUID-1821-patch.txt",
      "filename": "FLUID-1821-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-03T12:07:36.000-0500",
      "body": "Bug Parade  0.6 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T11:04:43.000-0500",
      "body": "I'd appreciate a review of this approach:\n\n1\\) Use the WebAIM-recommended approach of placing screen-reader-specific instructions in a div that is off-screen and tiny (<http://www.webaim.org/techniques/css/invisiblecontent/#hidingfromsighted>).\n\n2\\) Remove the visible instructions from the tab order so screen-reader users don't hear both sets.\n\nThe result is that JAWS users hear screen-reader specific instructions, and sighted users see different instructions.\n\nProblems: This patch doesn't yet deal with internationalization issues - there's the \"message-bundle:\" id, but now there are two messages, etc.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T15:22:14.000-0500",
      "body": "I've committed these changes, cleaned up a bit more and applied to all necessary files.\\\nThe message-bundle issue is now in <https://fluidproject.atlassian.net/browse/FLUID-1970#icft=FLUID-1970>.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-12-12T15:57:11.000-0500",
      "body": "This approach seems reasonable to me, but needs review by a genuine AT user.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T16:21:25.000-0500",
      "body": "Closing for now, will reopen if further investigation warants\n\nVerified fix using&#x20;\n\nJaws 9 with IE6, FF3, FF2 (Win XP)\n"
    }
  ]
}
---
Keyboard commands work only with virtual cursor turned off.&#x20;

With virtual cursor on: Tab into application, Dragonfruit highlighted. Press control + arrow, nothing happens. Press alt + arrow, focus moves to next image. Can only move focus from side to side.

With virtual cursor off (Insert + z): Tab into application, Dragonfruit highlighted. Can move focus up and down and side to side using arrow keys. Control + i, k, m, j enables you to move image up and down and side to side. Control + arrow enables side to side movement only.

Instructions should be revised for screen reader users: "To use the keyboard: Screen reader users turn off virtual cursor (insert + z). Select an image using the arrow keys or i, j, k or m or the arrow keys. Move an image by pressing control + arrow keys. View an image by pressing Enter."

        