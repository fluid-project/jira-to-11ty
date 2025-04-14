---json
{
  "title": "FLUID-920",
  "summary": "Focus is on the wrong button after pausing an upload",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-16T17:53:51.000-0400",
  "updated": "2008-07-25T15:33:32.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-07-25T15:31:30.000-0400",
      "body": "Fixed along with all the other button focus problems by explicitly focusing after certain actions.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T15:33:32.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\n"
    }
  ]
}
---
After pausing an upload, focus is put on the 'Done' button. The focus should be on 'Resume'

Steps to Reproduce

1\) Open either demo of the Uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) add some files to the Upload Queue

3\) Click the 'Upload' button

4\) Click the 'Pause' button. Notice that the focus is placed on the 'Done' button

        