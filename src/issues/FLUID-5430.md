---json
{
  "title": "FLUID-5430",
  "summary": "Manual test \"reordering page\": The drop target doesn't show",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2014-06-09T10:16:55.269-0400",
  "updated": "2017-02-21T14:10:46.983-0500",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T11:51:17.678-0400",
      "body": "It's possible the test didn't bother to design a style for the drop target.\n"
    },
    {
      "author": "Harshit Juneja",
      "date": "2016-03-06T14:54:24.339-0500",
      "body": "The demo is no longer hosted. Issue should be closed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-07T10:47:15.256-0500",
      "body": "@@Harshit Juneja I've updated the link to the Manual Test in question.\n"
    },
    {
      "author": "Aashay Singhal",
      "date": "2017-02-16T14:58:53.408-0500",
      "body": "I would like to work on this bug. \\\nAs per my understanding :- somehow i have to find after which div is the div with class = \"fl-reorder-dropmarker\" present and then i can find out over which div i am hovering and then i can indicate a color change or some marker. Any ideas on how to detect the order?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-02-17T09:25:01.788-0500",
      "body": "@@Aashay Singhal I think you probably want to just style `fl-reorderer-dropmarker`. It could be that this demo is missing a css file, that some other styling is rendering it invisible or etc. It could also be the problem that the reordererable elements are just too close together so the drop marker isn't perceivable.&#x20;\n"
    },
    {
      "author": "Aashay Singhal",
      "date": "2017-02-17T13:13:33.651-0500",
      "body": "Justin Obara  Oh yah, its about the css. I styled the fl-reorder-dropmarker and it works. Thanks 🙂 \\\nI will make a PR as soon as possible.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-02-21T14:10:43.568-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/813> has been merged into the project repo master branch at 0152aaf8d936242ed03cc0d3e02f3e1a0bb7d286\n"
    }
  ]
}
---
1\. Open up the demo: <http://build.fluidproject.org/infusion/tests/manual-tests/components/reorderer/dynamic/>\
2\. Drag a div to drop to another location;\
3\. The drop target indicator that shows where the div is dropped at doesn't show.

Other reorderer demos such as "image reorderer" (<http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/>) or "layout reorderer" (<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>) show drop targets.

        