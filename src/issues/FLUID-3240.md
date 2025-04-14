---json
{
  "title": "FLUID-3240",
  "summary": "Can't navigate to the Browse Files button: using IE6 Flash 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-10-06T16:33:58.000-0400",
  "updated": "2011-01-05T11:54:56.908-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 WinXP Flash 10\\\nFF 3.6 WIN 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "y z",
      "date": "2010-04-05T18:12:37.000-0400",
      "body": "This is also an issue in FF 3.6 in WIN 7\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T11:54:56.906-0500",
      "body": "Resolved in Infusion 1.3\n"
    }
  ]
}
---
Cannot activate the Browse Files button using IE

Steps to reproduce:

1\) Open the server version of uploader:\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Using the keyboard attempt to navigate to the "Browse Files" button

Notice that  you never seem to reach the browse files button.

        