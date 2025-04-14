---json
{
  "title": "FLUID-3926",
  "summary": "Layout reorderer unit test (Drop warning visibility for up and down) fails if one uses \"open link in new tab\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "James Yoon",
  "date": "2010-12-16T14:22:02.144-0500",
  "updated": "2014-03-03T13:39:56.266-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF 3.6, IE 8 in Windows XP\\\nFF 3.6, Mac 0S X 10.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3942/",
      "key": "FLUID-3942",
      "summary": "Multiple Fluid view unit test fails if the window is not in focus"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-12-16T22:14:37.423-0500",
      "body": "This seems like a timing race - note that the error will always go away on refreshing the page, in those cases where it appears. It looks like for a new tab the browser is probably slightly more busy during startup than in the other cases.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-01-13T18:22:28.806-0500",
      "body": "I believe this is really the same issue as the \"top-level browser window\" focus issue\n"
    }
  ]
}
---
To reproduce:

1\. Browse to <http://build.fluidproject.org/unit-tests.html>\
2\. Open the link "Layout reorderer" in a new tab (either by right-clicking the link and selecting "Open link in new tab" or by ctrl-clicking)\
3\. Unit test "Drop warning visibility for up and down" fails

Notes:

* Also fails if you drag the test into the browser
* Does not fail if you do a regular click, open in a new window, or paste the link into the address bar

        