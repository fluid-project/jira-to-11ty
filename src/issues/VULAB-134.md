---json
{
  "title": "VULAB-134",
  "summary": "web component not redirecting at proper time",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-18T11:33:39.000-0500",
  "updated": "2014-03-04T08:25:45.931-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-134/VULAB-134.patch",
      "filename": "VULAB-134.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-12-22T12:23:15.000-0500",
      "body": "vulab12\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-22T12:29:30.000-0500",
      "body": "Issue has been fixed by cleaning up the js functions and improved the js logging (it should only be triggered for those who have firebug installed)\n\nthe stopRecording js function wasn't being called properly.\\\nPlease review attached patch.\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-22T15:34:45.000-0500",
      "body": "patch commited by dmakalsky.\n"
    }
  ]
}
---
As reported by Ron during a test and further investigated by David Makalsky, it seems that the vulab web is not reading when the appropriate time to redirect is.

Initial investigation leads me to believe its an error in a condition.

        