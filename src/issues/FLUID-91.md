---json
{
  "title": "FLUID-91",
  "summary": "Pressing \"enter\" does not always display image",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2007-11-05T13:02:23.000-0500",
  "updated": "2008-03-11T15:58:14.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox&#x20;\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-257/",
      "key": "FLUID-257",
      "summary": "Test Javascript enter-key activation on all browsers"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-96/",
      "key": "FLUID-96"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-15T16:03:23.000-0500",
      "body": "Downgraded to critical.  Still intend to fix for the 0.1 release, but no longer a blocker.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2007-11-22T16:07:08.000-0500",
      "body": "Finally able to consistently reproduce this one! This happens when the user clicks on either of the anchors (either the image or the text) when dragging a thumbnail. Dragging by clicking on the whitespace works fine.&#x20;\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2007-11-27T16:04:12.000-0500",
      "body": "After discussing this with Michelle, we have decided to fix this for the next release.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2007-12-11T10:43:14.000-0500",
      "body": "Following Michelle's comment above, this problem only appears to apply to Firefox. Behaviour is fine in IE 6 and 7.\n\nTested on Windows XP. Safari not tested.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-11T15:58:14.000-0400",
      "body": "This was fixed by the patch for <https://fluidproject.atlassian.net/browse/FLUID-257#icft=FLUID-257>\n"
    }
  ]
}
---
Pressing the enter key to view an image has no effect. In windows, you can tab around again, and the second time it will work. The difference is that on the first time tabbing through, the entire lightbox image grid and and the image selected both have focus. On the second time around, only the selected image has focus. For mac, the lightbox image grid keeps focus with the selected image, resulting in the enter key not opening the image.

        