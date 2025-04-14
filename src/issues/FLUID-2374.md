---json
{
  "title": "FLUID-2374",
  "summary": "Pressing the \"enter\" key after changing the value in a textfield, has no effect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-03-17T14:19:29.000-0400",
  "updated": "2009-05-26T15:26:18.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-14T10:16:36.000-0400",
      "body": "Bug Parade 1.1 release\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-05-25T22:28:31.000-0400",
      "body": "Fixed at revision 7243\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-26T13:41:19.000-0400",
      "body": "Right now enter submits the form which will save and apply the settings. I think enter should actually just change the value but not save it.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-26T15:25:33.000-0400",
      "body": "On second thought I was convinced that the behaviour is correct in an IRC conversation: <http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-26>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-05-26T15:26:18.000-0400",
      "body": "I reviewed the code - looks good.&#x20;\n"
    }
  ]
}
---
Pressing the "enter" key after changing the value in a textfield, has no effect

Steps to reproduce

1\) Open the UI Options example from the daily build site

2\) Type in a value in one of the textfields

3\) Press the enter key

Notice that pressing the enter key does not change the size in the preview window. Pressing the tab key, will.

        