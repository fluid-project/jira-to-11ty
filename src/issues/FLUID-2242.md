---json
{
  "title": "FLUID-2242",
  "summary": "Can't open UI Options Dialog more than once: using Opera",
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
  "date": "2009-02-13T16:01:18.000-0500",
  "updated": "2009-02-18T10:32:52.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-13T16:01:39.000-0500",
      "body": "Bug Parade 0.8 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-18T10:32:52.000-0500",
      "body": "Appears to have been fixed.\n\nTested using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)\n"
    }
  ]
}
---
Can't open UI Options Dialog more than once: using Opera

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html#>

2\) Click on the "Edit Appearance" button to open the UI Options dialog

3\) Click the close button&#x20;

4\) Click on the "Edit Appearance" button to open the UI Options dialog again

Notice that it won't open

        