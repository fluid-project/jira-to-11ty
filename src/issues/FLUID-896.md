---json
{
  "title": "FLUID-896",
  "summary": "Keyboard navigation freezes on \"add files\" in pop-up version of uploader",
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
  "date": "2008-07-11T19:38:31.000-0400",
  "updated": "2008-07-25T11:28:11.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, IE6, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-07-25T11:26:34.000-0400",
      "body": "Seemed to be a problem with jQuery UI's modal dialogs. Turning modality off should fix the issue for now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T11:28:11.000-0400",
      "body": "Verified fixed using FF2, FF3, IE6, IE7 (Win XP)\n"
    }
  ]
}
---
When attempting to traverse the page through tabs, the keyboard navigation freezes on the 'add files' button. This only occurs after the uploader has opened in the pop-up version.

steps to reproduce:

1\) Open the pop-up version of uploader from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) select "add files"

3\) close the os file open dialog

4\) tap the 'tab' key. Notice that after it cycles through the elements of the uploader and the browser, it comes back and freezes on "add files"

dev-iteration39

        