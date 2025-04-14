---json
{
  "title": "ENGAGE-395",
  "summary": "The Collect/Uncollect button and associated status message aren't styled correct in Artifact View",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-17T10:49:03.000-0500",
  "updated": "2010-02-18T15:07:07.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/ENGAGE-395.patch",
      "filename": "ENGAGE-395.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/ENGAGE-395-2.patch",
      "filename": "ENGAGE-395-2.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/ENGAGE-395c.patch",
      "filename": "ENGAGE-395c.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/fe_mobile_icon_added.png",
      "filename": "fe_mobile_icon_added.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/fe_mobile_icon_collect.png",
      "filename": "fe_mobile_icon_collect.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/fe_mobile_icon_comment.png",
      "filename": "fe_mobile_icon_comment.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/fe_mobile_icon_removed.png",
      "filename": "fe_mobile_icon_removed.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-395/fe_mobile_icon_uncollect.png",
      "filename": "fe_mobile_icon_uncollect.png"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-17T10:49:48.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-17T10:52:31.000-0500",
      "body": "Patch <https://fluidproject.atlassian.net/browse/ENGAGE-395#icft=ENGAGE-395> makes the collect artifact button higher and gives an absolute position of the collect notification which is now slid down.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-18T06:21:47.000-0500",
      "body": "ENGAGE-3950-2.patch should be used instead of ENGAGE-3950.patch, the collect/uncollect confirmation position is still absolute but now the top enclosing div is made relative, so the confirmation is relative to it and is less prone to move about in different browsers and with different font sizes. Also as the confirmation is a link (and links under the iphone theme are with black text color) a forced value for its text color is given. The only change to ArtifactCollectiView.js is to hide the confirmation element before setting its text so that the layout of its predecessors is not affected.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-18T15:07:07.000-0500",
      "body": "Committed the ENGAGE-395c.patch. The only changes made were to use plain text for the message strings and using jquery's .text function instead of .html for applying them.\n"
    }
  ]
}
---
At the moment, the Collect/Uncollect button in Artifact Viewfloats into the Navigation Bar and isn't correctly aligned on the page. Similarly, the collection status message floats underneath everything and is not correctly styled.&#x20;

We should tweak the CSS to get the page looking like the wireframes.

        