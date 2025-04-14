---json
{
  "title": "FLUID-2187",
  "summary": "Avatar for portlets with permissions does not remain under pointer while dragging: using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-02-03T10:53:40.000-0500",
  "updated": "2009-03-12T14:11:52.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Safari 3.2 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T14:11:52.000-0400",
      "body": "fixed with updrage to jQuery UI 1.7\n"
    }
  ]
}
---
Avatar for portlets with permissions does not remain under pointer while dragging

This may not be a big issue as we don't have those types of permissions. It may make sense to remove the manual test.

        