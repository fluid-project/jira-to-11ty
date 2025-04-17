---json
{
  "title": "ENGAGE-455",
  "summary": "Refactor Home to be amenable to use inside the Screen Navigator",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-24T16:18:23.000-0500",
  "updated": "2014-03-03T13:46:19.980-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Home Screen"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
There are a couple of issues in the Home screen that prevent its use in the Screen Navigator:

1\. Home causes a page transition using window\.location upon load to ensure that we get the correct strings bundle for the current locale. This should refactored to use an as-yet non-existent SN API

2\. Makes references to itself in links with relative URLs that aren't fully qualified. So:\
./Home.html\
should be changed to\
../home/Home.html

3\. Home rewrites URLs on click instead of when the langugage is selected, causing a condition where the Screen Navigator can't correctly operate on those link URLs at click time since they haven't been rewritten yet

        