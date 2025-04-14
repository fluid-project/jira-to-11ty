---json
{
  "title": "FLUID-1923",
  "summary": "Upload button still displays mouse over styling when disabled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-12-04T14:00:06.000-0500",
  "updated": "2008-12-18T11:52:17.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:52:17.000-0500",
      "body": "Appears to have been fixed\n\nTested with\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Upload button still displays mouse over styling when disabled

Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Using the mouse, hover over the disabled upload button.

Notice that the styling changes when the mouse is over the button

        