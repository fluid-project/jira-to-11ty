---json
{
  "title": "FLUID-4025",
  "summary": "Expand column styles to include more options",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2011-01-07T11:25:11.420-0500",
  "updated": "2011-03-17T13:54:06.426-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4025/flexible-columns.css",
      "filename": "flexible-columns.css"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-03-07T09:58:38.338-0500",
      "body": "Some notes from the FSS meeting\n\nfor percentages we should have fss classes for 1 - 100, we can move the less common ones to a separate file if need be.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-15T07:42:43.838-0400",
      "body": "Attached flexible-columns.css which was provided by Gary on the this fluid-work e-mail thread <http://old.nabble.com/FSS-expanded-flexible-columns-to31098851.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-16T17:14:09.174-0400",
      "body": "Pushed the contributed flex container styles <https://github.com/fluid-project/infusion/commit/a06ef22e3b3d6c5544d0a9e400ca7a8c2d67c8d2> . I made some changes though. 1) changed the names to match that of the other fss flex containers 2) removed the float and display styles 3) did not use the IE 7 hack\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-16T17:14:44.803-0400",
      "body": "Assigning to you Heidi to see if you would like to add any more container or column styles.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-17T13:54:06.400-0400",
      "body": "The fix for the original issue has been committed. Any new column/container styles that we want to add will be filed as separate jiras.\n"
    }
  ]
}
---
uPortal folks have done some work expanding the available styles for columns (more sizes, etc). It'd be great to add these to the fss layout css file.

        