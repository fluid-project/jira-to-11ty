---json
{
  "title": "FLUID-1623",
  "summary": "The avatar for reorderable list items containing a nested list, have words that extend below the background colour; using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-25T16:32:30.000-0400",
  "updated": "2011-01-10T15:05:54.444-0500",
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
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE7, IE8 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1623/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-25T17:04:20.000-0400",
      "body": "'screenshot-1' shows the sub-list items extending below the grey background of the avatar\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-01-10T15:05:54.443-0500",
      "body": "Appears to have been fixed with the demo redesign\n"
    }
  ]
}
---
The avatar for reorderable list items containing a nested list, have words that extend below the background colour

Steps to reproduce

1\) Open the sortable vertical list demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/todo-list/sortable-styled-todo-list.html>

2\) Using the mouse pick up one of the list items which contains a sub-list

Notice that the last line extends below the background colour of the avatar

        