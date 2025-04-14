---json
{
  "title": "FLUID-2391",
  "summary": "The dialog is not visible on the screen after switching from a large font to a small one.",
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
  "date": "2009-03-20T13:40:20.000-0400",
  "updated": "2009-05-05T13:16:02.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-05T13:16:02.000-0400",
      "body": "This issue has been fixed with <https://fluidproject.atlassian.net/browse/FLUID-2425#icft=FLUID-2425>, as the dialog is now closed on saving changes.\n"
    }
  ]
}
---
The dialog is not visible on the screen after switching from a large font to a small one.

Steps to reproduce

1\) Open the Sakai mock-up example from the daily build site

2\) Open the UI Options dialog

3\) Change to the largest minimum text size and save the changes

4\) hit 'esc' to close the UI Options Dialog

5\) Re-open the UI Options Dialog and change back to a small text size, such as 10pt and save the changes

Notice that the UI Options dialog is not visible on the screen. It is still blocking though, and can be closed by hitting the 'esc' key

        