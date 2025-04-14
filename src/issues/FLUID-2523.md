---json
{
  "title": "FLUID-2523",
  "summary": "Re-opening the dialog after closing it with the 'esc' key, doesn't display the preview window: using IE",
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
  "date": "2009-04-06T10:13:16.000-0400",
  "updated": "2009-05-11T11:17:44.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 6 (Win 2000)\\\nIE 7 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2523/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-06T10:13:53.000-0400",
      "body": "'screenshot-1' shows the blank preview window\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-11T11:17:44.000-0400",
      "body": "Appears to have been fixed\n"
    }
  ]
}
---
Re-opening the dialog after closing it with the 'esc' key, doesn't display the preview window

Steps to reproduce:

1\) Open the Sakai Mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html#>

2\) Open the UI Options dialog and close it using the 'esc' key

3\) Open the UI Options dialog again.

Notice that the preview window is blank. clicking on the "Cancel" or "Reset" button will refresh the dialog and make the preview window visible

        