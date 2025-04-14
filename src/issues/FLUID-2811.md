---json
{
  "title": "FLUID-2811",
  "summary": "Can tab out of modal dialog and not be able to get back: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-05-28T12:39:57.000-0400",
  "updated": "2011-05-17T09:58:03.457-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T09:58:03.456-0400",
      "body": "No longer using a dialog\n"
    }
  ]
}
---
Can tab out of modal dialog and not be able to get back

Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Attempt to either 'tab' or 'shift-tab' around the dialog

Notice that you can move out of the dialog and you are unable to return

        