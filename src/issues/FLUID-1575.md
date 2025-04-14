---json
{
  "title": "FLUID-1575",
  "summary": "Pressing the up/down arrow keys will move selection and the scroll bar, using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-16T15:15:19.000-0400",
  "updated": "2010-12-22T15:46:13.138-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-325/",
      "key": "FLUID-325",
      "summary": "Key presses cause scrolling when selectables are contained in a scrollable element such as a scrolling div."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1029/",
      "key": "FLUID-1029",
      "summary": "Pressing and holding an arrow key, while in the file queue moves the scroll bar"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-09-16T19:20:31.000-0400",
      "body": "This is a duplicate of <https://fluidproject.atlassian.net/browse/FLUID-1029#icft=FLUID-1029>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T08:52:11.000-0400",
      "body": "This  one is similar to Fluid-1029 but not quite a duplicate.\n\nThe difference being:\n\nIn Fluid-1029 a keypress and hold moves the scroll bar\n\nIn this issues a keytype (keypress and release) moves both selection and the scroll bar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:07:07.726-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-22T15:46:13.135-0500",
      "body": "Firefox 2 issue--we no longer support this browser as A-Grade, and it has been out of the market for long enough to not actively support it. If we're lucky, this is something that will be fixed in a future update to the Scroller component.\n"
    }
  ]
}
---
Pressing the up/down arrow keys will move selection and the scroll bar

Steps to reproduce:

1\) Open the uploader

2\) Add enough files to the file queue so that the scroll bar appears

3\) Tab to the file queue and use the up/down arrow keys to move across the files in the file queue

Notice that the presses on the arrow keys both moves the selection across the files and moves the scroll bar.

        