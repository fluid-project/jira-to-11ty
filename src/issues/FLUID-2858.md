---json
{
  "title": "FLUID-2858",
  "summary": "Cannot use the keyboard to continue uploading or add files with Flash 10: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-06-01T10:36:54.000-0400",
  "updated": "2014-05-22T14:27:52.922-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "WinXP, Opera 9.64, Flash 10\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2031/",
      "key": "FLUID-2031",
      "summary": "Cannot use the keyboard to activate the \"Browse Files\" button with Flash 10"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:32:55.536-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:27:52.913-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
To reproduce this problem:

1\) Navigate to server or demo version of uploader\
Server: <http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>\
Demo: <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Use keyboard to navigate to  Browse Files button

3\) Activate Browse Files button (use mouse - see FLUID-2031

4\) Use keyboard to select files and add to queue

5\) Attempt to use keyboard to upload files, or move around the browser page - you will notice that you can't actually do anything with the keyboard - you are stranded.

        