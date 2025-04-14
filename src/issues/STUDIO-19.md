---json
{
  "title": "STUDIO-19",
  "summary": "The size of \"login/logout\" button should not adjust according to UIO \"line spacing\" setting",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Cindy Li",
  "date": "2011-12-09T10:09:17.980-0500",
  "updated": "2014-03-03T13:02:07.777-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": "All browsers\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-12-09T11:04:55.511-0500",
      "body": "This issue was originally filed as the 'display prefs' button not adjusting with line spacing. I checked this one with James, and he feels that neither the login button nor the show prefs button should adjust with line spacing, since they're only one line. So the problem is that the login button **does** enlarge. I will address that issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-12T12:11:38.732-0500",
      "body": "Merged into project repo at 5400f9d7c83a77ae9e499da9dd2f0ded917dd759\n"
    }
  ]
}
---
Increase (or decrease) the value of UIO setting "line spacing", the size of the "log in/out" button is enlarged (or reduced) accordingly, but the size of "show/hide display preferences" button stays unchanged.

        