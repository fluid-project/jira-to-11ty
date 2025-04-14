---json
{
  "title": "FLUID-114",
  "summary": "Reorderer on FF doesn't always register the 2nd item you try to drag",
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
  "reporter": "Eli Cochran",
  "date": "2007-11-15T18:07:46.000-0500",
  "updated": "2007-12-20T17:24:32.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Image-Gallery on Firefox 2.0.0.9 Mac and WIndows (doesn't seem to happen on IE6 or Safari)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-12T13:51:29.000-0500",
      "body": "Unable to reproduce this bug on FireFox 2.0.0.11 on Windows. Using Gallery in Sakai-Cafe with 8 images. Using SVN Revision 4534 of Fluid.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2007-12-20T17:24:32.000-0500",
      "body": "I'm going to close this, because I can't reproduce it either, and I used to be able to make this happen every time. I suspect that one of the many other changes fixed this bug.&#x20;\n"
    }
  ]
}
---
In the Gallery on Firefox on both the Mac and Windows, more often than not the second item that you attempt to drag will fail to reposition on the drop. &#x20;

Steps to reproduce:\
Inside an Image Gallery with a number of images (my test had 8):\
1\) Mouse down on an Image (image A) and drag and drop it to a new position.\
DnD succeeds\
2\) Mouse down on another image (image B) and drag and drop it to a new position.\
DnD fails, image **snaps** back to it's original position\
3\) Mouse down again on image B and drag and drop it to a new position.\
This time the DnD succeeds.&#x20;

More Info:\
In my tests I can drag image A repeated and it will succeed. But when I attempt to drag B it will fail until I attempt to drag it again. It appears that although image B will drag, some variable hasn't woken up to the fact that B is now the active element for the drop. Also if you drag A (success), drag B (fail), then go and drag a third image (C), it will work.&#x20;

        