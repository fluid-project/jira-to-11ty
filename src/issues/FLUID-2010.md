---json
{
  "title": "FLUID-2010",
  "summary": "Deleting uploaded files from the file queue will cause it to skip files and hang",
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
  "date": "2008-12-17T13:25:30.000-0500",
  "updated": "2009-01-29T09:18:41.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nIE7, FF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1819/",
      "key": "FLUID-1819",
      "summary": "Uploader allows keyboard-triggered removal of files after upload"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1982/",
      "key": "FLUID-1982"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2010/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T13:26:46.000-0500",
      "body": "'screenshot-1' shows the first file skipped\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:14:27.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-13T09:55:10.000-0500",
      "body": "The patches for <https://fluidproject.atlassian.net/browse/FLUID-1982#icft=FLUID-1982> did not resolve this issue.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-16T12:20:23.000-0500",
      "body": "Using Antranig's very clean and easy to use Fluid.enabled() method, I have now rendered uploaded rows undeletable, thus closing this bug.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-19T08:40:11.000-0500",
      "body": "It seems that you can still remove the uploaded files using a combination of the keyboard and mouse.&#x20;\n\nUse the mouse to click on the check mark.\\\nUsing the keyboard tap the delete key.\n\nNotice that the file is removed from the queue and the upload issue still occurs.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-28T12:32:29.000-0500",
      "body": "We now check to see if the file was completed and if so, we don't allow the file to be removed from the queue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-29T09:18:41.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nIE7, FF3 (Win Vista)\n"
    }
  ]
}
---
Deleting uploaded files from the file queue will cause it to skip files and hang

Steps to reproduce:

1\) Open the uploader demo:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add several files to the file queue

3\) Start uploading the files and click "Stop Upload" after one or two files upload

4\) Using the keyboard tab into the file queue and press the 'delete' key to remove the uploaded files from the file queue

5\) Click the 'Upload' button to resume the upload

Notice an equal number of files, to the ones that were removed, are skipped and that uploader hangs at the end.

This issues is dependent on <https://fluidproject.atlassian.net/browse/FLUID-1819#icft=FLUID-1819>

        