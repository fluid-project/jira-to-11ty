---json
{
  "title": "FLUID-1029",
  "summary": "Pressing and holding an arrow key, while in the file queue moves the scroll bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-07-25T13:59:45.000-0400",
  "updated": "2014-07-07T15:31:26.260-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-325/",
      "key": "FLUID-325",
      "summary": "Key presses cause scrolling when selectables are contained in a scrollable element such as a scrolling div."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1575/",
      "key": "FLUID-1575"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:53:42.000-0400",
      "body": "Affects Uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-16T19:21:43.000-0400",
      "body": "The filequeue needs to be smart enough that when the queue is focused it shifts the focus to the elements inside the queue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T09:00:29.000-0400",
      "body": "I wonder if this is related to <https://fluidproject.atlassian.net/browse/FLUID-325#icft=FLUID-325> : Key presses cause scrolling when selectables are contained in a scrollable element such as a scrolling div\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T12:58:29.429-0400",
      "body": "a11y issue\n"
    }
  ]
}
---
Pressing and holding an arrow key, while in the file queue, does not change selection, but scrolls the file queue's scroll bar instead.

Steps to reproduce:

1\) Open either version of the Uploader, from the daily build site:

2\) Add enough files so that the scroll bar appears in the file queue

3\) Using the keyboard, tab to highlight one of the files in the file queue

4\) Press and hold either the up or down error key. Notice that the scoll bar is moving, and not the focus of the file.

        