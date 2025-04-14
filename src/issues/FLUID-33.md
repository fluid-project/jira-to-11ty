---json
{
  "title": "FLUID-33",
  "summary": "Fix the up/down calculations in the Reorderer to handle a range of spatial positioning options.",
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
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T12:23:39.000-0400",
  "updated": "2008-11-13T13:26:01.000-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1148/",
      "key": "FLUID-1148",
      "summary": "Implement new \"Drop Manager\" for the Reorderer"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-14T21:13:50.000-0400",
      "body": "The geometric infrastructure required by the new drop manager should allow us to deal with this task\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:08:05.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476.\n\nThe new \"projectFrom\" method of the GeometricManager implements this functionality, which is verified by a low-level test case in GeometricManagerTests - however, we should create a high-level markup-driven test to verify that this works reasonably in a real-lfe scenario.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-13T13:26:01.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3  (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
At the moment, the algorithm for determine which element is above or below the current element relies on an exact match between their x coordinates. This would break if there is any kind of spatial offset between elements (eg. one is slightly offset to the left or right of the other). Also, we currently determine horizontal positioning based on document order, but it's quite conceivable that CSS may be used to position items next to each other that are not siblings within the DOM.

So, we need to fix the code to use ranges of x and y coordinates to determine the spatial position of all elements. This should be done in a way that is independent from re-ordering, such that anyone can use our cool new spatial calculator.

        