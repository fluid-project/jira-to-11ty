---json
{
  "title": "FLUID-5442",
  "summary": "Sakai integration demo: missing file",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2014-06-13T12:58:53.931-0400",
  "updated": "2015-06-26T09:59:51.883-0400",
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
      "date": "2015-06-16T11:53:14.217-0400",
      "body": "The sakai integration demo has been removed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:53.258-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
1\. Turn on firebug or developer tool in the browser and go to console;\
2\. Open up sakai integration demo: <http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>\
3\. This error is reported in the console:

"NetworkError: 404 Not Found - <http://build.fluidproject.org/infusion/integration-demos/sakai/css/none>"

One reason (but may not be all) is that in the infusion/integration-demos/sakai/css/base.css, this line appears at various locations:

background: url(none);

        