---json
{
  "title": "FLUID-687",
  "summary": "File Uploader: allows files with the same name",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-06-02T15:59:05.000-0400",
  "updated": "2016-11-08T12:33:52.869-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
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
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 3.2 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE9, IE 11 (Win 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3272/",
      "key": "FLUID-3272"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-687/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T16:01:37.000-0400",
      "body": "screenshot-1 shows that both \"small size.txt\" files were uploaded\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-02T17:29:05.000-0400",
      "body": "This is a tricky one...\n\nOne could argue that this is not a bug, since you could upload two files with the same name from different directories that are, in fact, not the same file. There are many scenarios where this might be true.&#x20;\n\nThe question is... in what situations can the back-end support this behavior and what feedback should be given to the user.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T09:51:07.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T11:10:06.483-0500",
      "body": "Observed during testing for 1.3\n"
    }
  ]
}
---
Users are able to add the same file (same name) to the uploader, multiple times. No error messages or indication is provided that the same file is in the upload queue.

possible scenario:

User goes in and selects a few files. The user decides they want to upload more and adds some more files using the shift+mouse click to select a range of files. One file is selected by both methods.&#x20;

        