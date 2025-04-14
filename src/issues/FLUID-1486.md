---json
{
  "title": "FLUID-1486",
  "summary": "Runtime Error in Layout Customizer A runtime error is thrown when pushing the arrow key in a direction where there is no column.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-08T14:06:37.000-0400",
  "updated": "2008-09-11T09:13:17.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T17:12:49.000-0400",
      "body": "I believe this has been resolved along with the day's fixes.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:31:01.000-0400",
      "body": "Same symptom, but different error.\n\nError: 'mindist' is null or not an object\\\nLine: 514\\\nCode: if(lockedcollect.mindist < minelem.mindist) {\\\nFile: GeometricManager.js\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-09T22:20:42.000-0400",
      "body": "Sorry, I missed the IE7 specification on this the first time.... that puts a whole different complexion on things 😛\n\nFrankly, that error seems impossible.... since I can see no way that non-numeric values can get into \"mindist\" along any code path. We may have to wheel out the heavy artillery on this one, in the form of the Studio debugger thingery. From what I can see, this seems to work correctly on every other platform...\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T09:11:08.000-0400",
      "body": "If you move a portlet using the mouse, before following the steps in the description, the issue doesn't seem to occur.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T12:04:42.000-0400",
      "body": "This also occurs in Firefox but with different steps.\n\nSteps to reproduce on firefox:\n\n1\\) Open the uPortal example from the daily build site:\\\n<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>&#x20;\n\n2\\) Using the keyboard move all of the portlets from the right column to the left column. On the last portlet push left again. notice that it will cause an error (visible using firebug)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T14:32:38.000-0400",
      "body": "Fixed at revision 5503\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:13:17.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
A runtime error is thrown when pushing in a direction where there is no column.

Error: 'cacheelem.position' is null or not an object\
Line 381: var retpos = projected.cacheelem.position;\
File: GeometricManager.js

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Tap the tab key until one of the portlets has focus

3\) Using the arrow keys move to a portlet in the left column

4\) Push the left arrow key. Notice the run time error

The same issue occurs if you push right from a portlet in the right hand column

        