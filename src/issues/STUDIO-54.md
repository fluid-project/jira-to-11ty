---json
{
  "title": "STUDIO-54",
  "summary": "The tab order in the header is wrong when at the mobile width",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2012-06-29T07:50:35.203-0400",
  "updated": "2014-03-04T11:53:58.539-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-29T08:01:33.024-0400",
      "body": "We can probably make use of window\\.matchMedia. There isn't any IE support for anything below IE10, but most of those didn't support media queries anyways and are thus immune to this bug.\n\n<http://old.nabble.com/window.matchMedia-the-js-equivalent-of-media-queries-td34090941.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-04T11:53:58.538-0500",
      "body": "The fluid studios site has been taken down. There are no current plans to replace it.\n"
    }
  ]
}
---
When the page width is shrunk down to the mobile size, the left panel is collapsed into the header. It retains the same tab order as the desktop width though, which is backwards from what you'd expect. You go from right to left.

Steps to reproduce:

1\) Open the fluid studios site (currently only on the development site dev.studios.fluidporject.org)

2\) Shrink the width of the page till the mobile version is displayed

3\) Using the keyboard tab around the interface.\
Notice that in the header you go from right to left, which is the opposite of the typical tab order.

        