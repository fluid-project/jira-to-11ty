---json
{
  "title": "FLUID-1484",
  "summary": "All moved elements will flash after performing a DnD operation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T12:18:44.000-0400",
  "updated": "2008-09-09T09:14:41.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nOpera (Win2K)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T17:49:58.000-0400",
      "body": "I have tried returning to JQuery manipulation rather than raw DOM operations, but unfortunately the flashing is not dispelled. It is hard to explain, since it was not present in the 0.5 beta. My guess at the moment is that this is some form of CSS application mistiming issue - and may be related to the other kinds of corruption we can now see, such as 1482 (I have seen some kinds of CSS corruption of this kind, but not this particular issue)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T18:12:29.000-0400",
      "body": "I **think** I have found the cause of this issue, and apparently quite a number of other awfulnesses that I saw.&#x20;\n\nThis line, \\\n//jQuery(thatReorderer.activeItem).removeClass(options.styles.selected);\\\nin Reorderer.js drag stop, has now been commented out, which makes everything seemingly much more humane. This is odd, since this line was carried over from the drag stop operation we had before. In general I don't really understand the CSS transition rules we have right now, which are responsible for problems like <https://fluidproject.atlassian.net/browse/FLUID-676#icft=FLUID-676>. In any case I think this particular change is a step in the right direction.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:14:41.000-0400",
      "body": "Verified fix using:\n\nIE6, IE7 (Win XP)\\\nIE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
All moved elements will flash after performing a DnD operation.

Steps to reproduce:

1\) Open the lightbox demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/generic-lightbox/generic-lightbox.html>

2\) Move an image to a new location

3\) Notice that the images which are reordererd briefly flash on the screen after the DnD operation is complete.

        