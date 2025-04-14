---json
{
  "title": "FLUID-5859",
  "summary": "LayoutReorderer test fails on Firefox 44",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2016-02-11T07:12:12.543-0500",
  "updated": "2016-07-08T09:06:59.745-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Fedora Linux 23\\\nFirefox 44.0\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5859/error.png",
      "filename": "error.png"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5859/infusion2_linuxfedora23_firefox44_LayoutReorderer_IndividualTest.ogv",
      "filename": "infusion2_linuxfedora23_firefox44_LayoutReorderer_IndividualTest.ogv"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-11T13:10:48.107-0500",
      "body": "Hi Giovanni - really cool video!\\\nMy suspicion is that this is caused by a layout issue. This configuration of the reorderer makes use of a very ancient and ancestral thing known as the \"Geometric Manager\" to decide where dragged things are going to end up. I can't make out the video completely clearly, but I think what it shows is that the portlet 9 is being dragged to the 3rd slot rather than the end of the 1st column - that is, the order is starting with 1, 2, 9, 3, 4 rather than 1, 2, 3, 9, 4 - is that correct?\\\nThis implies that on Linux+FF and on no other platform, some detail relating to the CSS layout algorithm is causing the exact pixel offsets in play here to be slightly differently aligned. This might take some while to track down, and my feeling is that this should not be a release blocking issue, since the behaviour still represents \"something acceptable\" - the portlet 9 is dragged to some position in the column to the left of it that lies approximately level with its current position. In fact, to be honest, the behaviour on Linux seems more sensible than that on the other platforms since the 3rd row in column 1 is actually the one directly opposite the 3rd row in column 2.&#x20;\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2016-02-11T13:39:59.584-0500",
      "body": "I think you're correct regarding what's happening to portlet 9.\n\nI also agree this shouldn't be a blocker, specially because Fedora, while a mainstream distribution, doesn't enjoy the usage levels of Ubuntu. Either way, I'm unsure about our user-base but I'd take a guess it's not comprised majorly of Linux users.\n\nThese GUI issues can be tricky, specially on Linux where each distribution/version combination does things differently. Although I use Linux as my primary OS, I'm incredibly frustrated by its desktop. That being said, if there is anything I can do to help track this down on F23, please me know.\n"
    }
  ]
}
---
LayoutReorder test always fails on Firefox 44 (Linux), [individually](http://build.fluidproject.org/infusion/tests/component-tests/reorderer/html/LayoutReorderer-test.html) and as part of all-tests.html

        