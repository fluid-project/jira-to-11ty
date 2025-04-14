---json
{
  "title": "FLUID-1963",
  "summary": "UI Options should show current styling options as selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-12-11T15:13:18.000-0500",
  "updated": "2008-12-15T14:12:20.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1941/",
      "key": "FLUID-1941",
      "summary": "Closing saves changes"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1963/patch1963.txt",
      "filename": "patch1963.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1963/patch1963v2.txt",
      "filename": "patch1963v2.txt"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-15T12:36:08.000-0500",
      "body": "Patch file that initializes the UI Options component only once.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-15T12:41:40.000-0500",
      "body": "This regression was reintroduced in revision 6190. The problem is that the UI Options component was being initialized every time the 'Edit Appearance' button was pressed. I've created a patch that initializes the component only on the first time the button is pressed.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-12-15T12:52:39.000-0500",
      "body": "Linted patch with license.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-15T12:58:39.000-0500",
      "body": "I have reviewed this patch, and it looks good to me.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-15T14:12:20.000-0500",
      "body": "Verified fix using&#x20;\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
when you open the iFrame the selected settings are always the same, to start, no matter what the current style on the page is&#x20;

Steps to reproduce:

1\) Open the sakai mock-up:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Click on the  "Edit Preferences" button

3\) Change the colour scheme, click on "save and Apply your Preferences", and click close

4\) Click on the  "Edit Preferences" button

Notices that the original styling options are selected not the current style's options

        