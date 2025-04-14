---json
{
  "title": "FLUID-4103",
  "summary": "Odd keyboard portlet move behaviour - State test",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "John Kremer",
  "date": "2011-02-22T12:18:41.646-0500",
  "updated": "2011-02-28T15:47:58.134-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Win 7 IE9\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3925/",
      "key": "FLUID-3925",
      "summary": "With no wrapping on, the keyboard movement keystrokes are captured by the browser where a wrap would have occurred"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

1\. Press tab until a porlet has focus - notice only 1 portlet will ever get focus\
2\. Use the arrow keys to select a different portlet -works.\
3\. pressing, i/j/k/m selects a different portlet - works\
4\. holding ctrl and pressing an arrow moves the portlet - works

5\. holding ctrl and pressing i/j/k/m to move a portlet issues:

* when the highlighted portlet is moved all the way to the left and your press 'ctrl + j' IE opens a View Downloads window.
* when the highlighted portlet is moved all the way to the right and your press 'ctrl + k' IE opens a new Browser window.\
  &#x20;

        