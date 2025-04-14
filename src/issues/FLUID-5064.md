---json
{
  "title": "FLUID-5064",
  "summary": "Some UIO settings not reflected in panels on reload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "y z",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-21T11:39:25.476-0400",
  "updated": "2013-10-04T10:40:31.442-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-21T11:42:37.287-0400",
      "body": "I noticed this when I upgraded the VideoPlayer to the latest Infusion (f364026444ef1babfde31d115b1797d35b11691e) on June 17. My previous version of Infusion had been built on June 3, from commit 585ae84e652099a9f944d0bd8dd3fe342bff411e.\n"
    }
  ]
}
---
Some of the settings that are stored in persistent storage (i.e. the cookie) and which are successfully acted upon by UIE and the enactors are NOT being reflected when the UIO panels are rendered. Specifically, I have observed this with

* ToC
* underline/bold
* show captions (in video player extensions)
* show transcripts (in video player extentions)

To reproduce:

1\) Open the demo page\
2\) Open the fat panel and make a change to every single option\
3\) Confirm that all the changes are actually being applied to the page\
4\) Reload the page\
5\) Confirm that all the changes are still being applied to the page, indicating that they were successfully saved\
6\) Open the fat panel\
7\) Observe that the ToC and underline/bold controls are NOT in the 'on' position, despite the fact that the settings are on

        