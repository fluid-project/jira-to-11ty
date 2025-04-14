---json
{
  "title": "FLUID-1316",
  "summary": "Using the space bar to activate the inline edit field erases all of the content: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-08-27T10:58:22.000-0400",
  "updated": "2014-07-07T15:34:41.758-0400",
  "versions": [
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
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:52:59.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:05:27.474-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-07T15:34:41.749-0400",
      "body": "Opera is no longer a supported browser\n"
    }
  ]
}
---
Using the space bar to activate the inline edit field erases all of the content

Steps to reproduce:

1\) Open the bSpace demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>

2\) Tab to one of the inline edit fields (Note that due to FLUID-1318 you have to activate one of the fields with the mouse before you can tab to any inline edit field)

3\) Press the space bar to activate the inline edit field. Notice that all of the content has been erased

        