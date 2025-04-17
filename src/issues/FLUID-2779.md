---json
{
  "title": "FLUID-2779",
  "summary": "Cursor over current page number and disabled prev/next links in Pager(renderer version) should be an arrow, not the hand",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Reopened",
  "reporter": "y z",
  "date": "2009-05-27T09:46:05.000-0400",
  "updated": "2019-03-22T21:38:44.612-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2",
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "FF3, OPERA9.6, IE6 - WINXP\n\nChrome 35, Firefox 30, Safari 7 (Mac OS 10.9)\\\nIE 11 (Win 7)\\\nSafari 10 (macOS 10.12)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3921/",
      "key": "FLUID-3921",
      "summary": "When on first or last page, \"previous\" and \"next\" links, respectively, aren't grayed out"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5561/",
      "key": "FLUID-5561",
      "summary": "Convert Pager CSS to Stylus"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "sparsh paliwal",
      "date": "2016-03-02T15:16:20.290-0500",
      "body": "Hi I am new to infusion. I guess to solve this bug we can simply use css cursor property when :active. But for the part prev/next links in Pager, from my basic understanding of infusion we need to make a event for previousNext subcomponent <https://wiki.fluidproject.org/display/docs/Pager+API#PagerAPI-PreviousNextsubcomponent> which would solve both the things for greying out(<https://fluidproject.atlassian.net/browse/FLUID-3921#icft=FLUID-3921>) and putting the arrow, and not the hand in the prev/next link.&#x20;\n\nI am sorry if this is a basic question I have tried reading tutorial for infusion and Event System and this is what I have understand, please help me get on right path if I am wrong.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-03T08:40:08.420-0500",
      "body": "sparsh paliwal I've updated the description to include a link to pager demo. The parent of the previous/next link gets a class \"fl-pager-disabled\" added to it when it should be disabled. The active page link gets a class of \"fl-pager-currentPage\" added to it. You should be able to make use of these classes to create the appropriate styles needed.&#x20;\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-03T09:40:26.433-0500",
      "body": "@Justin Thank you very much. I have sent PR for the fix of this issue and FUILD-3921.\n\n<https://github.com/fluid-project/infusion/pull/674>\n"
    }
  ]
}
---
The cursor over the current page number, disabled previous and next page links on the Pager ([renderer version](http://build.fluidproject.org/infusion/demos/pager/)) is a hand but should have a default "over text" cursor look (i.e. arrow)

        