---json
{
  "title": "FLUID-2819",
  "summary": "[Uploader] Upload button fails in Demo version of the Uploader, when run locally.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-05-28T13:12:50.000-0400",
  "updated": "2009-11-06T14:15:30.000-0500",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Opera 9.64, Mac OS X (Flash 10)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2789/",
      "key": "FLUID-2789",
      "summary": "Toggling between the Flash and HTML version of uploader, will cause the Multi-file uploader's upload button to break: using Opera"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2009-05-28T13:24:23.000-0400",
      "body": "The error in the Opera Error Console when the Upload button is clicked is:\n\nJavaScript - file://localhost/opt/fluid-infusion/src/webapp/components/uploader/html/Uploader.html\\\nEvent thread: click\\\nUnhandled exception: \"Call to SetButtonDisabled failed\"\n\nsame error as you get with <https://fluidproject.atlassian.net/browse/FLUID-2789#icft=FLUID-2789>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-06T14:15:30.000-0500",
      "body": "Cannot seem to be able to reproduce this issue any more\n"
    }
  ]
}
---
Most probably related to FLUID-2789,

In Opera, the Uploader allows you to Browse for and load files into the File Queue but the Upload button doesn't work.&#x20;

This appears to be Mac specific.

        