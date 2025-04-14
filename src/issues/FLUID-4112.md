---json
{
  "title": "FLUID-4112",
  "summary": "No js 'Browse...' button on Win 7/FF renders 'Browse_'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "heidi valles",
  "date": "2011-02-23T16:51:38.417-0500",
  "updated": "2015-06-26T10:04:01.207-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Win 7, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:57:11.683-0400",
      "body": "Cannot reproduce with IE 11 (which is currently the latest supported version of IE)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:00.147-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Turn off javascript in the uploader - the browse button says "Browse\_". I think Win 7 just isn't rendering the ellipses usually after Browse... but thought I'd mention it as it does look weird.

        