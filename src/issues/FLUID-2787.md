---json
{
  "title": "FLUID-2787",
  "summary": "Form controls disappear in simplified layout when switching between accordion panels: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-05-27T12:14:06.000-0400",
  "updated": "2009-05-28T08:38:49.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE7, IE6 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2788/",
      "key": "FLUID-2788",
      "summary": "Radio button and checkbox labels are missing: using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-27T17:05:50.000-0400",
      "body": "The patch for <https://fluidproject.atlassian.net/browse/FLUID-2788#icft=FLUID-2788> fixes this one as well.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-28T08:38:49.000-0400",
      "body": "Verified fix using:\n\nIE7, IE6 (Win XP)\\\nIE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Form controls disappear in simplified layout when switching between accordion panels

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Change to the simplified layout and save the changes

3\) Reopen the User Interface Options dialog, and flip between the accordion panels.

Notice that the form controls disappear.

You can bring them back by dragging the dialog

        