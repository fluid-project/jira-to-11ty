---json
{
  "title": "FLUID-3942",
  "summary": "Multiple Fluid view unit test fails if the window is not in focus",
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
  "date": "2010-12-17T13:49:25.296-0500",
  "updated": "2014-03-03T13:39:46.597-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "FF 3.6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3926/",
      "key": "FLUID-3926"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-13T18:20:52.212-0500",
      "body": "It is unlike that this can ever be resolved, given the limits of fidelity in simulating focus events. If the overall browser window is not in focus, no elements in it will receive focus notifications, and so any tests which require to receive these will fail.\n"
    }
  ]
}
---
In Firefox 3.6 (Win XP), if the unit test page is open but not in focus while running, multiple tests will fail, specifically:

1. Fluid View Tests module: Dead man's blur test - excluded component one (2, 3, 5)
2. Fluid View Tests module: Dead man's blur test - excluded component two - b (2, 3, 5)
3. Fluid View Tests module: Dead man's blur test - excluded component excluded (2, 3, 5)

To reproduce:

1\. Go to <http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidView-test.html>\
2\. Put window out of focus immediately (just as the unit tests start running)\
3\. Aforementioned unit tests will fail

        