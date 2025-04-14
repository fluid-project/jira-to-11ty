---json
{
  "title": "FLUID-961",
  "summary": "\"Browse Files\" and \"Add More\" buttons aren't activated by the keyboard in the inline version of uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-07-21T17:25:23.000-0400",
  "updated": "2008-07-28T08:18:22.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, IE7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T12:19:21.000-0400",
      "body": "Added a spurious href to the Browse button to get it to see the Enter key\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-28T08:18:22.000-0400",
      "body": "Verified fix using FF2, FF3, and IE7 (Win XP)\n"
    }
  ]
}
---
The "Browse Files' and "Add More Files' buttons aren't activated by the keyboard.

Steps to reproduce:

1\) Open the inline version of uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>

2\) Click 'Add Files'

3\) Using the keyboard tap the 'tab' key  until the "Browse Files" button has focus.&#x20;

4\) Using the keyboard tap the 'enter' key. Notice that the File Open dialog does not open

5\) Using the mouse click the "Browse Files" button and add some files

6\) Tap the 'tab' key and then "Shift Tab' to put focus on the "Add More" button

7\) Using the keyboard tap the 'enter' key. Notice that the File Open dialog does not open/

        