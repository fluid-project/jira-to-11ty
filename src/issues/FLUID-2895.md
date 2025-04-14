---json
{
  "title": "FLUID-2895",
  "summary": "[Uploader] Browse button displays as a white box in IE 7 when running off the local system in Flash 10",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2009-06-02T15:39:41.000-0400",
  "updated": "2009-10-14T16:29:11.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP & Vista/IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-10-14T16:29:11.000-0400",
      "body": "This was solved via <https://fluidproject.atlassian.net/browse/FLUID-3196#icft=FLUID-3196>\n"
    }
  ]
}
---
In IE7 under Windows XP and Vista, the browse button in the Uploader is blank. The Uploader still works. This appears to be a problem with the way the path to the image is being parsed.

This was tested against FF3 in Windows and Mac, Safari and Opera on Mac and did not show the error.&#x20;

        