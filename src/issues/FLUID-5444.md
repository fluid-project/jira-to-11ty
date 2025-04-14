---json
{
  "title": "FLUID-5444",
  "summary": "Reorderer manual test: missing files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Cindy Li",
  "date": "2014-06-13T13:04:36.991-0400",
  "updated": "2015-06-26T09:55:10.118-0400",
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
      "date": "2015-06-16T11:57:06.593-0400",
      "body": "Likely fixed when the manual test was updated post 1.5\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:46.388-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
1\. Turn on firebug or developer tool in the browser and go to console;\
2\. Open up reorderer manual test: <http://build.fluidproject.org/infusion/tests/manual-tests/html/versioning.html>\
3\. This error is reported in the console:&#x20;

"NetworkError: 404 Not Found - <http://build.fluidproject.org/infusion/tests/manual-tests/html/todo-list.css>"

        