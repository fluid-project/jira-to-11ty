---json
{
  "title": "FLUID-1602",
  "summary": "Infusion Read Me add mention that Uploader not compatable with Flash 10 beta",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Eli Cochran",
  "date": "2008-09-22T12:39:36.000-0400",
  "updated": "2008-09-30T11:12:22.000-0400",
  "versions": [
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "All browsers, all platforms, Flash 10 beta\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The Read Me should mention that the Uploader does not currently work with the Flash 10 beta. This bugs is caused by Adobe changing the security protocols for Flash 10 which blocks the SWFUpload code from calling the OS File browser. The SWFUpload community is looking for fixes and work arounds both in their own code and in Flash, and we anticipate a work around or fix before Flash 10 goes final.&#x20;

        