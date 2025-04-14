---json
{
  "title": "FLUID-1050",
  "summary": "Can't tab focus the 'Browse Files\" and \"Add More\" buttons: Using Opera",
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
  "date": "2008-07-29T08:58:56.000-0400",
  "updated": "2009-02-19T13:46:10.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5)\\\nOpera 9.5 (Win XP)\n\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:59:34.000-0400",
      "body": "Affects Uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-04T19:33:30.000-0500",
      "body": "added back in the href into the \\<a> tag.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-08T08:50:02.000-0500",
      "body": "still doesn't work in Opera 9.5 on both Mac OS 10.5 and Win XP\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-17T11:46:22.000-0500",
      "body": "I was also unable to remove files from the queue using the keyboard in Opera.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-19T13:41:40.000-0500",
      "body": "Opera uses CTRL+(up/down arrow key) to navigate between links\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-19T13:46:10.000-0500",
      "body": "Appears to have been fixed\n\nTested with:\n\nIE 6, FF3 (Win 2000)\n"
    }
  ]
}
---
You are unable to tab focus either the "Browse Files' or the "Add more" buttons in the uploader.&#x20;

Steps to reproduce:

1\) Open the uploader example:\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Attempt to tab to the browse button.

Notice that you are unable to reach the browse button via the keyboard

        