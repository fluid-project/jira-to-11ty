---json
{
  "title": "FLUID-2503",
  "summary": "There is no focus styling on the headers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-03T12:31:13.000-0400",
  "updated": "2009-05-19T09:13:00.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": "FF2, FF3, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE8 (Win XP)\\\nFF3, IE8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-19T09:13:00.000-0400",
      "body": "Appears to have been fixed at r7175\n\nVerified using:\n\nFF2, FF3, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE8 (Win Vista)&#x20;\n"
    }
  ]
}
---
There is no focus styling on the headers

Steps to reproduce:

1\) Open the sakai site setting example

2\) Tap the tab key repeatedly to try to focus the headers

Notice that the headers never appear to get focus

        