---json
{
  "title": "FLUID-1331",
  "summary": "Avatar of list item changes shape as it is pushed towards the right border: using safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-08-27T14:59:30.000-0400",
  "updated": "2014-07-07T15:43:27.113-0400",
  "versions": [
    "0.4",
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
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "Safari 3.2 (Mac OS 10.5)\\\nSafari 5 (Mac OS 10.6)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1331/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1331/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-27T15:00:40.000-0400",
      "body": "'screenshot-1' shows the normal avatar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-27T15:01:33.000-0400",
      "body": "'screenshot-2' shows the avatar pushed up against the right border of the browser\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-08T13:45:03.000-0400",
      "body": "This is appearing in the springboards as well, whereas any container for a draggable item can then influence the avatars size. This is especially obvious when doing a multi-column drag operation.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T12:15:33.000-0400",
      "body": "Appears to have been fixed with one of the resent changes\n\nVerified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T11:07:30.000-0400",
      "body": "The issue has reappeared in Safari 3.1 (Mac OS 10.5)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T11:08:01.000-0400",
      "body": "Updated environment\n"
    }
  ]
}
---
Avatar of list item changes shape as it is pushed towards the right border. This only occurs when the browser does not take up the full screen.

Steps to reproduce:

1\) Open the Sortable Vertical List demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Adjust the browser size, so that it does not take up the full screen.

3\) Drag one of the list elements towards the right hand side. Notice that as it touches the right boarder it becomes skinnier and taller.

        