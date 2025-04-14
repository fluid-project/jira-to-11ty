---json
{
  "title": "FLUID-5429",
  "summary": "Page link tooltips aren't read by VoiceOver",
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
  "date": "2014-06-09T10:13:56.995-0400",
  "updated": "2016-10-26T09:37:56.143-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Safari 7 (Mac OS 10.9)(VoiceOver)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-26T09:37:56.140-0400",
      "body": "No longer seems to be an issue with Safari 10 on macOS 10.12\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the pager demo\
<http://build.fluidproject.org/infusion/demos/pager/>

2\) Navigate to one of the page links\
Notice that the tooltip describing the range of items for the page link is not read by VoiceOver.

        