---json
{
  "title": "FLUID-6081",
  "summary": "VoiceOver on Pager doesn't announce the page number when the focus is on a page link",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2016-11-18T17:12:57.911-0500",
  "updated": "2021-07-15T08:29:20.593-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "VoiceOver on Safari, Chrome at Mac 10.11.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
1\. Open the pager demo: <http://build.fluidproject.org/infusion/demos/pager/> in Chrome or Safari\
2\. Turn on VoiceOver\
3\. Use keyboard to tab onto the page 1 link\
4\. VoiceOver announces: "Joe I Instructor - Fernando Horwitz". The page number is not announced.

        