---json
{
  "title": "FLUID-2824",
  "summary": "Using the keyboard to open the dialog a second time, the labels for the radio buttons don't display: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2009-05-28T13:36:15.000-0400",
  "updated": "2009-06-02T10:09:49.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6, IE 7 (Win XP)\\\nIE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:09:49.000-0400",
      "body": "Was unable to reproduce this issue, not sure why but tested with IE 7 (Win Vista) and IE 6 (Win XP) and it is no longer present.\n"
    }
  ]
}
---
Using the keyboard to open the dialog a second time, the labels for the radio buttons don't display

Steps to reproduce:

1\) Open the sakai mock up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options dialog, and close it

3\) 'tab' to the "Edit Appearance" button and tap the 'enter' key to open the dialog again

Notice that labels for the radio buttons are not displayed

If you move the mouse at all, the will appear

        