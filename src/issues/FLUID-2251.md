---json
{
  "title": "FLUID-2251",
  "summary": "Nothing seems to have focus after stopping an upload",
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
  "date": "2009-02-17T15:01:03.000-0500",
  "updated": "2014-07-08T11:05:14.965-0400",
  "versions": [
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\\\nIE9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:58:20.000-0400",
      "body": "Bug Parade release comment removed\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-24T19:41:09.000-0400",
      "body": "On re-reading this bug, I realize that it is fixed.&#x20;\n\nAfter Browsing on FF, the focus does not get set but for Upload and Stop Upload, it's working\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T09:17:02.000-0400",
      "body": "I'm still experiencing this. It only happens on the server version, not in the demo.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-03T11:17:47.947-0400",
      "body": "Testing for the 1.4 release, I'm noticing this problem in IE9 on Win 7, also with the server version but not the demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-08T11:05:14.958-0400",
      "body": "This issue was fixed in the demo version a long time ago. The sever demo was taken down recently (won't fix).\n"
    }
  ]
}
---
Nothing seems to have focus after stopping an upload

Steps to reproduce:

1\) Open the server version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Add several files to the file queue

3\) Start uploading the files

4\) Using the keyboard, tap the 'enter' key while the "Stop Upload" button has focus&#x20;

Notice that the uploads stop, but nothing seems to be focused. Tapping 'enter' on the keyboard doesn't seem to have any affect.&#x20;

        