---json
{
  "title": "FLUID-4082",
  "summary": "Can only tab once to Add More / Upload after file has been added to queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Emily Servais",
  "date": "2011-02-18T11:53:43.030-0500",
  "updated": "2014-05-22T14:28:36.431-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 on Win XP, with Flash 10\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3997/",
      "key": "FLUID-3997"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-02-18T13:03:53.022-0500",
      "body": "I can reproduce on IE7 (Win XP) and IE8 as well. &#x20;\n\nFor IE8, even the \"Add more\" is focused, it refreshes the screen when I press \"Enter\" onto it.\n"
    },
    {
      "author": "John Kremer",
      "date": "2011-02-22T11:13:07.813-0500",
      "body": "IE9 similar issue expect that the focus is stuck on Add More. You can hit enter to browse for a file, but cannot tab off of Add More if you don't hit enter.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-22T14:28:36.428-0400",
      "body": "Due to a cross site scripting vulnerability we have removed flash support from the uploader. See <https://fluidproject.atlassian.net/browse/FLUID-5354#icft=FLUID-5354>\n"
    }
  ]
}
---
Using IE6 on Win XP with Flash 10, tabbing to Add More / Upload only works once.

To reproduce:

1\) Open the template file in IE 6 on Windows XP with Flash 10 installed:\
<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

2\) Use the mouse to add files to the queue.

3\) Tab to Add More. You can't subsequently tab to Upload - tab returns to address bar.

3\) Tab again; this time, tab goes directly to Upload button.

4\) Tabbing again does not work.

        