---json
{
  "title": "FLUID-4089",
  "summary": "NVDA progress bar beeps not happening in FF ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2011-02-18T14:05:00.215-0500",
  "updated": "2016-11-08T15:48:04.081-0500",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Progress",
    "Uploader"
  ],
  "environment": "NVDA 2010.2, FF3.6\\\nNVDA 2013.1, FF21\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-02-24T12:54:11.825-0500",
      "body": "Does this happen even when the ariaBusyText is set to \"\"?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-06-14T10:32:54.451-0400",
      "body": "Still an issue with FF 21 and NVDA 2013.1\n"
    }
  ]
}
---
NVDA doesn't beep when a progress bar is activated/updating in Firefox.  Both for progress demo & uploader.

        