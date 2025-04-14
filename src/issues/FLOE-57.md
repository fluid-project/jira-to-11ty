---json
{
  "title": "FLOE-57",
  "summary": "Issues with \"browse a subject area\" page is broken on IE 8 & 9",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2012-07-30T15:07:36.359-0400",
  "updated": "2012-08-16T14:05:49.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "IE8 on WinXP, IE9 on Win7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-07-31T14:22:05.499-0400",
      "body": "The presence of the 'send this link' form on the page seems to be caused by the IE limitations on CSS (max 31 files, max 4095 rules): The CSS that would normally format and hide the 'send this link' form is not getting loaded. Setting\\\nCOMPRESS = True\\\nin development.py and restarting the VM will cause all the CSS and JS to be compressed and loaded, and the form goes away.\n\nThe background on the number in the left panel, on the other hand, is still a problem.\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T14:05:48.998-0400",
      "body": "Cannot reproduce. (by Cindy and Alex)\n"
    }
  ]
}
---
How to get to "browse a subject area" page: On "Browse all" page, click on a subject area that has OER items

A couple of issues:\
1\. The page layout is broken by default: the section to share and comment this page sits on top of the OER item list;\
2\. Select a high contrast theme that is not white background, on the left panel, the number besides each subject area shows a white background.

        