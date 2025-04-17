---json
{
  "title": "FLUID-5481",
  "summary": "Preferences framework enactor tests fail if browser pane is zoomed in Chrome",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Cindy Li",
  "reporter": "Antranig Basman",
  "date": "2014-07-23T18:27:33.792-0400",
  "updated": "2017-09-26T10:55:55.207-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "Windows 7 x64, Chrome 36.0.1985.125, Safari 8.0.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5860/",
      "key": "FLUID-5860"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5384/",
      "key": "FLUID-5384",
      "summary": "Enactors and UIEnhancer tests failing in Chrome"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-03T11:00:03.692-0400",
      "body": "This bug also causes \"jank\" on startup of UIO embedded on a page which has been zoomed in Chrome. On startup, the page will snap to one size, and then to another, even if the user has not selected any adaptation.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-08T12:16:32.946-0400",
      "body": "Seems the issue results from how Chrome calculates the line height based on the element's font size and line height em. Have reported to the Chrome bug tracker:&#x20;\n\n<https://code.google.com/p/chromium/issues/detail?id=497790>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-08-18T22:20:18.949-0400",
      "body": "I am fairly confident that this bug will never be resolved. I suggest we try to hack together an \"ad hoc\" solution, using input from this now fairly-well supported browser measurement:\\\n<http://www.quirksmode.org/blog/archives/2012/06/devicepixelrati.html> - my tests today indicate that window\\.devicePixelRatio is supported on Firefox and Chrome which should be enough coverage. We may run into some problems on retina-resolution devices but I don't think we've done any testing on those anyway.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-26T10:55:55.198-0400",
      "body": "Tried using Chrome 61 and Safari 11 on macOS 10.12.6 and couldn't reproduce the issue. \n"
    }
  ]
}
---
This problem does not occur in Firefox.

If the browser is zoomed in Chrome, 3 tests will fail from Enactors-test.html. The following details come from a pane which was zoomed to 125%.

6\. \
1\. getLineHeight in px will report "8.97599983215332px" rather than "12px"\
8\. \
2\. line spacing in pixels will report the same.\
3\. The size should be doubled will report "17.95199966430664px" rather than "24px"

The ratio error is close to 4/3 but not quite. Rather than a factor of 1.3333333 it is 1.33689842072. This is likely going to be a tough behaviour to compensate for - especially since any reasonable person would have expected the factor to be related to 5/4 rather than 4/3.

This may be the reason for the report of <https://fluidproject.atlassian.net/browse/FLUID-5384#icft=FLUID-5384>

        