---json
{
  "title": "FLUID-2844",
  "summary": "Checkboxes not checking in the keyboard a11y checkbox example",
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
  "date": "2009-05-29T12:35:40.000-0400",
  "updated": "2009-05-29T13:19:53.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2844/fluid-2844.txt",
      "filename": "fluid-2844.txt"
    }
  ],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-29T12:42:24.000-0400",
      "body": "Unfortunately, this is another site where sample code had not been updated for the API change caused by Fluid-2477. At the time, it seemed that this only affected those users who were supplying a \"bindings\" structure which contained an entry for \"handler\" - but it in fact affects all users who have supplied an activation handler in the primary arguments too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-29T13:19:53.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6 (Mac OS 10.5)\\\nIE6, IE8 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Checkboxes not checking in the keyboard a11y checkbox example

Steps to reproduce:

1\) Open the keyboard a11y checkbox example\
<http://build.fluidproject.org/infusion/standalone-demos/keyboard-a11y/html/CheckboxExample.html>

2\) Attempt to check a checkbox. Notice that neither via keyboard, not mouse can you check any of the checkboxes

        