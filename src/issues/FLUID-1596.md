---json
{
  "title": "FLUID-1596",
  "summary": "Springboards: Can move a locked portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-19T09:51:17.000-0400",
  "updated": "2011-01-14T09:53:24.255-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1596/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-19T09:52:22.000-0400",
      "body": "'screenshot-1' shows the locked portlet from column b in column c\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-19T12:36:28.000-0400",
      "body": "Fixed at revision 5619. Bug in fluid.remove\\_if corrected with test cases.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T14:18:07.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Can move the locked portlet in column b

Steps to reproduce:

1\) Open the Layout Customizer Springboards from the daily build site

2\) Go to example 3

3\) Move all of the unlocked portlets from column a into column b

4\) Using the keyboard, navigate to the locked portlet in column b

5\) Attempt to use the keyboard to move the locked portlet

Notice that you are able to use keyboard reorderering to move the locked portlet

        