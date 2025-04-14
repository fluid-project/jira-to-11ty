---json
{
  "title": "FLUID-1998",
  "summary": "The font spacing, on the \"Save and apply your preferences\" button, does not change",
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
  "date": "2008-12-17T09:55:49.000-0500",
  "updated": "2009-01-07T13:47:13.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7  (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1998/FLUID-1998.patch",
      "filename": "FLUID-1998.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1998/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T09:56:35.000-0500",
      "body": "'screenshot-1' shows the unchanged font spacing  on the \"Save and apply your preferences\" button\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-06T12:10:37.000-0500",
      "body": "Bug Parade  0.7 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-01-07T11:52:58.000-0500",
      "body": "Added specific rules to handle form elements\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-01-07T12:40:40.000-0500",
      "body": "I've reviewed and tested this patch (<https://fluidproject.atlassian.net/browse/FLUID-1998#icft=FLUID-1998>.patch). Looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-07T13:47:13.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The font spacing, on the "Save and apply your preferences" button, does not change

Steps to reproduce:

1\) Open the Sakai mock-up or UI Options example:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>&#x20;

2\) On the Sakai mock-up page click "Edit Appearance"&#x20;

3\) Change the font spacing, and save the changes

Notice that the font spacing on the "Save and apply your preferences" button hasn't changed

        