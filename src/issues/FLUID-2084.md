---json
{
  "title": "FLUID-2084",
  "summary": "Pointer does not change style over visited page links: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-01-08T08:31:04.000-0500",
  "updated": "2009-02-13T15:41:01.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2084/PATCH-2084.patch",
      "filename": "PATCH-2084.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-23T14:29:34.000-0500",
      "body": "\"Focused Fix Day Wish List\"&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-06T12:53:45.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-02-12T17:08:49.000-0500",
      "body": "Removed explicit cursor settings\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T14:39:35.000-0500",
      "body": "Jacob's patch for this looks good, and works. He should commit it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T15:00:34.000-0500",
      "body": "still an issue with the renderer version\n\n<http://build.fluidproject.org/fluid/sample-code/pager/renderer/pager-render.html#>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-02-13T15:12:36.000-0500",
      "body": "Fixes on this all look good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-13T15:41:01.000-0500",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Pointer does not change style over page links, if the page has been visited before: using Opera

Steps to reproduce:

1\) Open the pager example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/pager/basic/pager.html#>

2\) Hover the mouse over the various page links and  next link. The cursor should change to a hand.

3\) Click through all of the page links

Notice that when you hover over the page links, the cursor no longer switches to a hand.

        