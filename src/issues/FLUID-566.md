---json
{
  "title": "FLUID-566",
  "summary": "File Upload: Progress background not displaying correctly in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-05T18:24:54.000-0400",
  "updated": "2011-02-22T16:28:00.211-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP, Internet Explorer 6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-05-30T18:41:36.000-0400",
      "body": "This is fixed for IE7.\\\nStill having some problems in IE6.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:47:23.000-0400",
      "body": "With the many updates that I have made to both the way that progress is tracked and the way that it is displayed this bug is fixed.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:28:00.210-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
In Internet Explorer 7 under Windows XP:\
1\) Queue up three or more files for uploading \
2\) Begin uploading a queue of files in the File Uploader\
Observe: the Progress pop-up is initially displayed correctly but soon after the first update the Progress pop-ups background area only displays part of itself.  On completion the pop-up once again has a moment of correct display before being dismissed.&#x20;

Note: this bug may also be present in IE6 and/or Windows Vista, not tested in those configurations yet.&#x20;

dev-iteration35

        