---json
{
  "title": "FLUID-1034",
  "summary": "Can't scroll file queue with mouse, using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-07-28T11:01:08.000-0400",
  "updated": "2008-08-14T14:32:33.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-14T14:32:33.000-0400",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
You are unable to move the scroll bar, in the file queue, with the mouse. It gets stuck to the top position.

Steps to Reproduce:

1\) Open the pop-up version of the Uploader, from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add some files so that the scroll bar shows

3\) Notice that you are unable to drag the scroll bar with the mouse.

You can still use the keyboard to navigate around the files

        