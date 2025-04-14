---json
{
  "title": "FLUID-4427",
  "summary": "Sliding \"text size\" or \"line spacing\" sliders doesn't enhance the main page instantly in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2011-09-02T09:46:05.271-0400",
  "updated": "2013-04-15T15:28:22.995-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-06T16:23:54.806-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-09-07T09:49:52.829-0400",
      "body": "Also doesn't work in IE7. Text size works in IE8, but not line spacing.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-12T12:36:54.792-0400",
      "body": "Merged into project repo at 68f69313e7da641032c6fa8bec4ccd15dd2a0f00\n"
    }
  ]
}
---
1\. Open <http://build.fluidproject.org/infusion/demos/uiOptions/html/uiOptions.html> in IE6\
2\. Click "show display preferences" to open UI Options\
3\. Slide "text size" slider\
4\. The text size of the main page is not adjusted accordingly

The same issue with "line spacing" slider.

This issue is producible in "fat panel" and "full page with preview" demos.&#x20;

        