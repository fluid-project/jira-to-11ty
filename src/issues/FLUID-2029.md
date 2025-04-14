---json
{
  "title": "FLUID-2029",
  "summary": "Sortable JQuery Tabs broken in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-12-17T17:34:07.000-0500",
  "updated": "2009-06-05T08:54:34.000-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE 6 XP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T09:19:27.000-0500",
      "body": "I am unable to reproduce it this issue on my Virtual Machine.\n\nI was able to reproduce it using \"Multiple IE\" on a native win xp machine.\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2008-12-18T09:28:44.000-0500",
      "body": "Here is more specific info:\n\nWIn XP SP3\\\nIE 6.0.2900.5512.xpsp\\_sp3\\_gdr.080814-1236\n\nOther variables - script debugging enabled (all options). Automatic update to IE 7 disabled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T09:37:34.000-0500",
      "body": "I believe it may only be throwing this error if you have some sort of debugging software running for IE. It seems to work on systems that don't.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-06-05T08:54:34.000-0400",
      "body": "Cannot reproduce, may have been fixed. Please re-open if reproduced again.\n"
    }
  ]
}
---
Error:

Line 101. Cannot load. Object  does not support this property or method.

Line hightlighted in Script Debugger:        $("#container-1 a").tabindex(-1);

        