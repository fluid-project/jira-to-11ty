---json
{
  "title": "FLUID-3584",
  "summary": "Clicking page numbers throws an error: using IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2010-04-01T11:34:35.000-0400",
  "updated": "2014-04-02T15:21:22.913-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "IE 6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:21:22.911-0400",
      "body": "We no longer support IE6\n"
    }
  ]
}
---
Clicking page numbers throws an error

Steps to reproduce:

1\) Open the pager demo\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>

2\) Click on one of the page links\
Notice that an error is thrown

Error: 'extraClass' is null or not an object\
Line 259\
File: jquery.tooltip.js

        