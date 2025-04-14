---json
{
  "title": "FLUID-2050",
  "summary": "The content is not displayed if the layout is changed to \"Simple\" using IE 7",
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
  "date": "2009-01-05T11:22:33.000-0500",
  "updated": "2009-01-06T12:10:10.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 (Win Vista, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-01-05T14:58:55.000-0500",
      "body": "Rendering bug, like the :hover issue.\\\nMove something, and everything instantly appears.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T09:51:08.000-0500",
      "body": "Verified fix using:\n\nIE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:10:10.000-0500",
      "body": "Bug Parade  0.7 release\n"
    }
  ]
}
---
The content is not displayed if the layout is changed to "Simple" using IE 7&#x20;

Steps to reproduce:

1\) Open the UI Options example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) Change the layout to "Simple" and save the change

Notice that the content of the page is not longer visible

        