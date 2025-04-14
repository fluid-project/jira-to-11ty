---json
{
  "title": "VULAB-98",
  "summary": "Fix audio for non-intel HW",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-12-01T11:09:52.000-0500",
  "updated": "2014-03-04T08:27:27.448-0500",
  "versions": [],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-12-01T11:25:25.000-0500",
      "body": "Mac G4, G5 and some other non-intel hardware require big endian encoding for the audio input stream\n\nAdding a try / catch  to support the non-intels\n\nvulab9\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-01T12:02:44.000-0500",
      "body": "(change to issue = component was not assigned)\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-12-01T18:03:46.000-0500",
      "body": "Code committed and tested by Peter R.  States that bigendian hardware is working (at least on a MAC G4)\n"
    }
  ]
}
---

        