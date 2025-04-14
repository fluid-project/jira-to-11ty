---json
{
  "title": "FLUID-4045",
  "summary": "Add built-in page strategy that shows a consistent number of links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Eric Dalquist",
  "date": "2011-01-26T15:02:34.226-0500",
  "updated": "2011-03-23T15:53:43.381-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4045/Pager.js",
      "filename": "Pager.js"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4045/PagerTests.js",
      "filename": "PagerTests.js"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-02-11T11:22:52.738-0500",
      "body": "Thanks for the code.  I have create a unit test case for it on my local system and I found a problem. &#x20;\n\nBy consistent, I am assuming the number of elements (both page numbers and ellipses) will be the same no matter which page I click on.  I tried loading consistentGappedPageStrategy(3,3) with 34 pages.  When I click on the 9th page, I got one extra element.  Demonstrated as follow:\n\n\\[page 1] 1 2 3 4 5 6 7 8 9 10 11 ... 32 33 34\\\n\\[page 2] 1 2 3 4 5 6 7 8 9 10 11 ... 32 33 34\\\n\\[page 3] 1 2 3 4 5 6 7 8 9 10 11 ... 32 33 34\\\n\\[page 4] 1 2 3 4 5 6 7 8 9 10 11 ... 32 33 34\\\n\\[page 5] 1 2 3 4 5 6 7 8 9 10 11 ... 32 33 34\\\n...\\\n\\[page 9] 1 2 3 4 5 6 7 8 9 10 11 12 ... 32 33 34\n\nNotice how we now have 1 extra element after 11, where as it should had been:\\\n\\[page 9] 1 2 3 ... 6 7 8 9 10 11 12 ... 32 33 34\n"
    },
    {
      "author": "Eric Dalquist",
      "date": "2011-02-11T15:11:01.905-0500",
      "body": "Is the unit test somewhere I can give it a try? Seems like it shouldn't be too hard to track that down.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-11T16:18:57.599-0500",
      "body": "Check out infusion, and then replace \\\nsrc\\webapp\\components\\pager\\js\\Pager.js with the attached Pager.js&#x20;\n\nreplace \\\nsrc\\webapp\\tests\\component-tests\\pager\\js\\PagerTests.js with the attached PagerTests.js\n\nThen go to your browser and run\\\nsrc/webapp/tests/component-tests/pager/html/Pager-test.html?Pager Tests%3A Pager consistentGappedPageStrategy\n"
    },
    {
      "author": "Eric Dalquist",
      "date": "2011-02-14T15:16:02.248-0500",
      "body": "Here is the fixed version:\n\nfluid.pager.consistentGappedPageStrategy = function (endLinkCount, midLinkCount) {\n\nif (!endLinkCount) {\n\nendLinkCount = 1;\n\n}       &#x20;\n\nif (!midLinkCount) {\n\nmidLinkCount = endLinkCount;\n\n}\n\nvar endWidth = endLinkCount + 2 + midLinkCount;\n\nreturn function (count, first, mid) {\n\nvar pages = \\[];      &#x20;\n\nvar anchoredLeft = mid < endWidth;\n\nvar anchoredRight = mid >= count - endWidth;\n\nvar anchoredEndWidth = endWidth + midLinkCount;\n\nvar midStart = mid - midLinkCount;\n\nvar midEnd = mid + midLinkCount;\n\nvar lastSkip = false;\n\nfor (var page = 0; page < count; page++) {\n\nif (\n\npage < endLinkCount || // start pages\n\ncount - page <= endLinkCount || // end pages\n\n(anchoredLeft && page < anchoredEndWidth) || // pages if no skipped pages between start and mid\n\n(anchoredRight && page >= count - anchoredEndWidth) || // pages if no skipped pages between mid and end\n\n(page >= midStart && page <= midEnd) // pages around the mid\n\n) {\n\npages.push(page);\n\nlastSkip = false;\n\n}\n\nelse if (!lastSkip) {\n\npages.push(-1);\n\nlastSkip = true;\n\n}\n\n}           &#x20;\n\nreturn pages;\n\n};\n\n};&#x20;\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-02-22T14:28:28.774-0500",
      "body": "Changes pushed to <https://github.com/harriswong/infusion/tree/FLUID-4045>, waiting for code review and commits.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-11T08:51:13.106-0500",
      "body": "I closed this issue as the code has been pulled into infusion at a58059329c1ddbdc65d9.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-03-23T15:53:32.321-0400",
      "body": "re-opening to fix the resolution status, which currently says unresolved\n"
    }
  ]
}
---
Here is an impl of a page strategy that will always display same number of page links (including skip place holders).

consistentGappedPageStrategy = function (endLinkCount, midLinkCount) {\
if (!endLinkCount) {\
endLinkCount = 1;\
}\
if (!midLinkCount) {\
midLinkCount = endLinkCount;\
}\
var midWidth = endLinkCount + (midLinkCount \* 2);

return function (count, first, mid) {\
var pages = \[];

var anchoredLeft = mid < midWidth;\
var anchoredRight = mid >= count - midWidth;\
var paddedMidWidth = midWidth + 2;\
var midStart = mid - midLinkCount;\
var midEnd = mid + midLinkCount;

var lastSkip = false;

for (var page = 0; page < count; page++) {\
if (\
page < endLinkCount || // start pages\
count - page <= endLinkCount ||  // end pages\
(anchoredLeft && page < paddedMidWidth) || // pages if no skipped pages between start and mid\
(anchoredRight && page >= count - paddedMidWidth) || // pages if no skipped pages between mid and end\
(page >= midStart && page <= midEnd) // pages around the mid\
) {\
pages.push(page);\
lastSkip = false;\
}\
else if (!lastSkip) {\
pages.push(-1);\
lastSkip = true;\
}\
}

return pages;\
};\
};&#x20;

        