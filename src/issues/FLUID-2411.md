---json
{
  "title": "FLUID-2411",
  "summary": "Refreshing the browser, hitting cancel or reset, breaks the functionality of the sliders: using Opera",
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
  "date": "2009-03-25T13:28:05.000-0400",
  "updated": "2009-05-25T12:39:53.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2510/",
      "key": "FLUID-2510"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-25T12:39:53.000-0400",
      "body": "Appears to have been fixed with one of the other changes leading up to the 1.1 release\n\nVerified using:\n\nOpera 9.6 (Win XP, Mac OS 10.5)\n"
    }
  ]
}
---
Refreshing the browser, hitting cancel or reset, breaks the functionality of the sliders: using Opera

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) refresh the browser, or open the UI Options dialog and hit reset

3\) Notice that moving the sliders has no effect in the preview window now.

Note that changes will still take effect if you save and apply, even though they don't appear in the preview. A work around is to close the dialog and re-open it.

        