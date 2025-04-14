---json
{
  "title": "FLUID-5338",
  "summary": "Navigating away from Prefs Framework demo and returning sometimes breaks the overviewPanel - the overviewPanel container can not be found and does not render",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2014-04-29T10:10:40.584-0400",
  "updated": "2014-05-07T11:19:01.528-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Overview Panel",
    "Prefs Framework"
  ],
  "environment": "Firefox\\\nOther browsers tested okay, but error may be handled by browser (i.e. by caching?).\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2014-04-29T11:22:30.198-0400",
      "body": "It seems that this problem may be caused by Firebug. By closing Firebug and reloading the demo, the problem would go away. Re-opening Firebug doesn't seem to cause the problem to re-occur.\n\nIt's uncertain how it is to get the browser or Firebug into a state to cause this issue, but it is unlikely a problem we can fix.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-04-30T13:53:31.723-0400",
      "body": "UPDATE:\\\nThis problem seems specific to Preferences Framework and / or its demo.\n\nTo reproduce:\n\n* Load this demo: <http://build.fluidproject.org/infusion/src/demos/prefsFramework/>\n* Navigate away using the API link in the overview panel.\n* Press back on the browser\n* notice the overview panel is gone.\n\nThe Firebug trick as mentioned in the previous comment doesn't always work.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-02T11:26:52.333-0400",
      "body": "Using FF 29 on Mac OS 10.9.2 I was only able to reproduce the issue when running the code locally and with firebug open.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-06T13:56:01.382-0400",
      "body": "I ran into this issue again, but this time it was in IE 8 on the simple inlineEdit demo and on the initial page load. On further investigation it seems to be a timing issue regarding the creation of the overviewPanel.\n\nCurrently the code to instantiate an overviewPanel is in <https://github.com/fluid-project/infusion/blob/master/src/demos/shared/js/overviewWrapper.js>\\\nThis file is called in the head of the demo file. The instantiation code is called as the result of a fetchResources call to bring in the  config file. However, we don't wait to ensure that the overviewPanel's container has been loaded into the DOM. Fortunately, in most cases, the fetching of the config takes longer than the DOM load, but in cases where it doesn't, we get the error. The proper way to handle this would either be to wrap the instantiation code into a $(document).ready call or provide an instantiator function that is called after the container has been loaded into the DOM.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-05-06T15:51:54.963-0400",
      "body": "Submitted a pull request that wraps the call to fluid.fetchResources in a $(document).ready function\\\n<https://github.com/fluid-project/infusion/pull/512>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-07T11:18:52.372-0400",
      "body": "Merged into the project repo @ 35d06f6c623f37a987b2b64792eccf424ed88b5c\n"
    }
  ]
}
---
If navigating away from the Prefs Framework demo and returning to the demo, an error occurs and the overviewPanel does not appear.

This is the error:\
ASSERTION FAILED: Instantiation of autoInit component with type fluid.overviewPanel failed, since selector " .flc-overviewPanel " did not match any markup in the document.

To reproduce:\
1\. Load the Prefs Framework demo - <http://build.fluidproject.org/infusion/src/demos/prefsFramework/>\
2\. Select the "Code" link which takes you away to another domain (i.e. github)\
3\. Press back on browser.\
4\. Notice that when arriving back on the demo page, the overview panel is not there.

Observations:

* It is possible the bug doesn't appear in every attempt. Just go forward away from the demo and back again.
* Using the "Code" / github link in the overviewPanel seems to reproduce this problem with higher probability (4 out of 5 tries causes this problem)
* The error claims "flc-overviewPanel" can not be found, but it can be seen in the markup.
* This seems to occur primarily in Firefox

        