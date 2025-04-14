---json
{
  "title": "FLUID-951",
  "summary": "Blue highlight over top of yellow highlight on keyboard navigation of inline edit fields, using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-21T13:34:57.000-0400",
  "updated": "2011-01-14T09:53:26.912-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-951/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-21T14:21:12.000-0400",
      "body": "'screenshot-1' shows the blue highlighting above the yellow highlighting. Look at the edges of the blue highlighting to see the yellow highlighting.\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2008-12-16T13:50:49.000-0500",
      "body": "In addiiton, after the editable text field has been selected and you hit the spacebar to move into the edit mode, a blue bar is left \"floating\" above the editable text box border.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T12:22:03.000-0500",
      "body": "This seems to be an Opera feature\n"
    }
  ]
}
---
When using the keyboard to navigate to the inline edit fields. A blue highlight is placed over the yellow highlight.

Steps to Reproduce:

1\) Open the inline edit example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

2\) Using the keyboard tab to one of the inline edit fields. Notice the blue highlight. If you look to the edges, you can see what appears to be the yellow highlight behind.

        