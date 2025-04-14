---json
{
  "title": "FLUID-1823",
  "summary": "Remove button changes to the error icon as a file is being removed from the file queue",
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
  "date": "2008-11-18T15:09:25.000-0500",
  "updated": "2008-11-19T08:34:07.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-11-18T16:20:48.000-0500",
      "body": "This was on of the nastiest little bugs that I've dealt with in a while. SWUpload fires a \"file error\" event for file removal, so when the file was being removed, another thread was swapping the file status as the file was being removed by the event attached to the file remove button. This now doesn't happen because I check whether the error is a regular error or a \"file remove\" error by checking the file status. This comment has now slipped over the edge into TMI.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-19T08:34:07.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF3, IE6 (Win XP)\n"
    }
  ]
}
---
Remove button changes to the error icon as a file is being removed from the file queue

Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/BrowseImages/>

2\) Add several files to the file queue

3\) Remove a file from the file queue

Notice that as a file is being removed, the 'x' (remove button) is changed to the error icon

        