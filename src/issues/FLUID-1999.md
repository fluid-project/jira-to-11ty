---json
{
  "title": "FLUID-1999",
  "summary": "Pointer changes to a hand cursor over radio button text, but clicking doesn't select the radio button: Using IE 6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-12-17T10:03:12.000-0500",
  "updated": "2009-01-12T14:05:47.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1999/UIOptions_html.patch",
      "filename": "UIOptions_html.patch"
    }
  ],
  "comments": [
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-06T13:49:12.000-0500",
      "body": "Labels for radio buttons that wrap the input and do not explicitly establish their relationship to the input (via for/id) have this problem in IE, others in other contexts. A patch to UIOptions attached.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-07T09:17:42.000-0500",
      "body": "Bug Parade 0.7 release\n"
    },
    {
      "author": "Gonzalo David Silverio",
      "date": "2009-01-12T13:43:18.000-0500",
      "body": "Looks good - thanks Jacob.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-12T14:05:47.000-0500",
      "body": "Verified fix using\n\nIE 6 (Win XP)\n"
    }
  ]
}
---
Pointer changes to a hand cursor over radio button text, but clicking doesn't select the radio button: Using IE 6

Steps to reproduce:

1\) Open the Sakai mock-up or the UI Options example:

2\) For Sakai mock-up click "Edit Appearance"&#x20;

3\) Attempt to change an option by clicking the text to the right of a radio button

Notice that the radio button is not selected

        