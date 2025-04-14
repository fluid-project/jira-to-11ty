---json
{
  "title": "FLUID-5420",
  "summary": "Need to use the space bar to open the file browser with NVDA on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2014-06-06T13:36:12.759-0400",
  "updated": "2014-06-06T15:19:41.054-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Chrome 35, IE 10, 11 (Windows 7)(NVDA 2014.2)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T15:19:41.054-0400",
      "body": "In Chrome nothing works unless you manually switch the mode first.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

2\) Navigate to the "Browse Files" button

3\) Tap the enter key to open the file browser\
Notice that the page just refreshes. You can enter using the space bar, or by changing the browse mode first (NVDA+space). This will allow the enter key to work.

        