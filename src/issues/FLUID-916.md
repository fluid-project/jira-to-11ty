---json
{
  "title": "FLUID-916",
  "summary": "Uploader title bar is the wrong colour, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T15:48:14.000-0400",
  "updated": "2008-07-25T08:25:50.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-24T18:12:06.000-0400",
      "body": "Fixed this by removing an extra reference to the Flora theme from jQuery UI\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T08:25:50.000-0400",
      "body": "Verified fixed using IE6 (Win XP)\n"
    }
  ]
}
---
The title bar of the Uploader is yellow, in IE6. It should be blue.

Steps to reproduce:

1\) Open the pop-up version of the Uploader demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) click the 'Add Files" button

3\) close the OS File Open Dialog

4\) notice that the title bar of the Uploader is yellow

        