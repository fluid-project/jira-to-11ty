---json
{
  "title": "FLUID-3925",
  "summary": "With no wrapping on, the keyboard movement keystrokes are captured by the browser where a wrap would have occurred",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-12-16T14:11:14.001-0500",
  "updated": "2014-06-06T08:28:08.407-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE11, IE10, IE9, IE8, IE7, IE6\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4767/",
      "key": "FLUID-4767"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4103/",
      "key": "FLUID-4103"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5408/",
      "key": "FLUID-5408"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:39:28.685-0400",
      "body": "Justin, could you double-check this, and if it's still an issue, could you clarify what the action should be, and what the 'default action' you're observing is?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-26T15:34:21.888-0400",
      "body": "@@Anastasia Cheetham i re-tested this today. It seems that it is no longer an issue in Chrome, Firefox, or Safari. However it's still present in IE (i've updated the environments). The behaviour should be to capture the keyboard short cut so that no action occurs. What happens in IE is that you will be using ctrl-k, when you get to the end, a new browser tab is opened.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open a reorderer demo such as the image reorderer\
<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/html/imageReorderer.html>

2\) use the keyboard, with the letter keys, to move an element to one of the edges.

3\) now tap the same set of  keys again to try to cause a wrap.

Notice that if the wrapping is turned  off, that the keystrokes are interpreted by the browser, which performs it's default actions.\
Note that the short cut keys may be different for different browsers.

        