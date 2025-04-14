---json
{
  "title": "FLUID-5443",
  "summary": "Reorderer standalone demo: missing files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-06-13T13:02:25.601-0400",
  "updated": "2015-06-26T10:00:10.829-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-16T11:55:24.702-0400",
      "body": "Addressed with changes made to <https://fluidproject.atlassian.net/browse/FLUID-5217#icft=FLUID-5217>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:53.364-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
1\. Turn on firebug or developer tool in the browser and go to console;\
2\. Open up reorderer standalone demo: <http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/table-tr.html>\
3\. Drag and drop an item in the table;\
4\. This error is reported in the console:&#x20;

"NetworkError: 404 Not Found - <http://build.fluidproject.org/infusion/standalone-demos/reorderer/images/drop.gif>"

        