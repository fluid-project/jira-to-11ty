---json
{
  "title": "FLUID-633",
  "summary": "Pressing Enter when CTRL depressed causes unexpected behaviour: using FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2008-05-27T12:07:51.000-0400",
  "updated": "2014-06-26T13:10:37.735-0400",
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
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, Mac OS 10.6, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-01T09:17:48.000-0400",
      "body": "In FF2 (Mac OS 10.5) a control+enter keypress is treated as control+(down arrow)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-15T14:11:34.531-0400",
      "body": "\\[Non A-Grade]\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-26T13:10:37.725-0400",
      "body": "FF2 is no longer supported.\n"
    }
  ]
}
---
If CTRL is depressed to move a tab and then ENTER is pressed (CTRL+ENTER) causes the tab example to temporarily break.&#x20;

Proper behaviour is restored by pressing TAB key and focus is placed on a orderable tab.

        