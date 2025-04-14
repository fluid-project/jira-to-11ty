---json
{
  "title": "FLUID-2385",
  "summary": "labels, checkboxes, and radio buttons are not being displayed: using IE 6",
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
  "date": "2009-03-19T12:49:15.000-0400",
  "updated": "2009-03-24T08:28:06.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2385/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-19T12:50:24.000-0400",
      "body": "'screenshot-1' shows the \"Easier to see\" section missing the labels and radio buttons\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-19T12:51:38.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-19T16:58:52.000-0400",
      "body": "I wasn't able to reproduce this. Is it a specific operating system?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-20T08:53:49.000-0400",
      "body": "This issue should be fixed with <https://fluidproject.atlassian.net/browse/FLUID-2380#icft=FLUID-2380>\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-03-20T09:04:57.000-0400",
      "body": "I can confirm this has been fixed as mentioned above -  I can no longer reproduce this on the latest build.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-24T08:28:06.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)&#x20;\n"
    }
  ]
}
---
labels, checkboxes, and radio buttons are not being displayed

Steps to reproduce:

1\) Open the sakai mock-up example from the daily build site

2\) Open the UI Options dialog

3\) Look at both panels in the accordion

Notice that none of the labels, checkboxes, or radio buttons are displayed

        