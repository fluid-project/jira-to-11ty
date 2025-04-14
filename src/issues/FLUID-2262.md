---json
{
  "title": "FLUID-2262",
  "summary": "Presing enter on a combo box, closes the dialog: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-18T11:57:35.000-0500",
  "updated": "2009-03-18T14:17:15.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Safari 3.1 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-18T14:17:15.000-0400",
      "body": "fixed with move to a jQuery UI Dialog\n\nTested using\n\nSafari 3.2 (Mac OS 10.5)\n"
    }
  ]
}
---
Presing enter on a combo box, closes the dialog

Steps to reproduce:

1\) Open the Sakai mock-up\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Open the UI Options Dialog by clicking on the "Edit Appearance" button

3\) Select one of the combo boxes and press the 'enter' key

Notice that the UI Options dialog closes

        