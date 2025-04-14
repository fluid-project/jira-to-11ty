---json
{
  "title": "FLUID-2797",
  "summary": "The prev/next link moves as user clicks previous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Daphne Ogle",
  "date": "2009-05-27T20:40:17.000-0400",
  "updated": "2018-11-29T08:58:38.370-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
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
  "environment": "Safari 3.2 (Mac OS 10.4)\\\nSafari 10 (macOS 10.12)\\\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nChrome 35, FF 30, Safari 7 (Mac OS 10.9)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE 11 (Win 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2009-05-27T20:44:39.000-0400",
      "body": "This seems to work fine on the Renderer version\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-01T02:35:31.274-0500",
      "body": "The Example under test is no longer found. Please can anyone update the link.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-01T09:41:12.419-0500",
      "body": "This specific demo no longer exists, but a similar issue occurs with the current demo ( <http://build.fluidproject.org/infusion/demos/pager/> ) and two of the current examples ( <http://build.fluidproject.org/infusion/examples/components/pager/annotateSortedColumn/> and <http://build.fluidproject.org/infusion/examples/components/pager/initialPageIndex/>). However the issue in these cases only appears with the \"next\" button.\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-28T16:12:27.659-0400",
      "body": "Is anyone working on the issue? If not, I could get started.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-03-29T08:07:16.795-0400",
      "body": "@@Blagoj Dimovski I do not believe that anyone else is working on this issue, feel free to work on it.\n"
    },
    {
      "author": "Blagoj Dimovski",
      "date": "2016-03-31T11:14:40.378-0400",
      "body": "@Justin Obara, I've started working on the issue, I will post updates through the weekend.\n"
    },
    {
      "author": "sushant mehta",
      "date": "2018-03-16T10:36:52.277-0400",
      "body": "@Justin can I start working on this issue???\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-19T08:57:36.648-0400",
      "body": "@@sushant mehta yes you can work on this issue.\n"
    }
  ]
}
---
I start in the middle of 19 pages.  Then as I click the previous link to get closer to the beginning, it moves around since the number of pages displaying becomes fewer (not sure why that is).  While you are clicking previous, you are likely looking at the changing data rather than the previous link so only after clicking a few times and nothing happening (or clicking something else on accident) do you notice the link moved.  Pretty annoying.  I'm not sure if the number of page numbers showing needs to change but it would be better if it doesn't or perhaps the previous link just stays in the same location anyway (even though it might get further from the page numbers).

Example under test:\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html#>

        