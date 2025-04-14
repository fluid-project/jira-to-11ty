---json
{
  "title": "FLUID-2788",
  "summary": "Radio button and checkbox labels are missing: using IE",
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
  "date": "2009-05-27T12:19:37.000-0400",
  "updated": "2009-05-28T08:39:03.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6 (WinXP)\\\nIE7 (Win XP, Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2787/",
      "key": "FLUID-2787"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2788/FLUID-2788.patch",
      "filename": "FLUID-2788.patch"
    }
  ],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-05-27T16:20:18.000-0400",
      "body": "Patch addresses the hasLayout bug in IE 6 + 7 and how it affects our AT-friendly markup\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-27T17:03:35.000-0400",
      "body": "I've reviewed this patch, discussed it briefly with Jacob, and tested in IE6, IE7 and FF3 on Mac. It looks good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-28T08:39:03.000-0400",
      "body": "Verified fix using:\n\nIE7, IE6 (Win XP)\\\nIE7 (Win Vista)&#x20;\n"
    }
  ]
}
---
Radio button and checkbox labels are missing

Steps to reproduce:

1\) Open the Sakai Mock Up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Open the UI Options dialog

3\) Flip between the accordion panels

Notice that the labels for the radio buttons and checkboxes are missing

        