---json
{
  "title": "ILDH-36",
  "summary": "Question mark character in document titles / URLs can cause problems when parsed",
  "tags": "ILDH",
  "project": {
    "key": "ILDH",
    "title": "Inclusive Learning Design Handbook"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-04-28T15:01:09.071-0400",
  "updated": "2020-10-21T11:01:21.564-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the ILDH, there are two documents "Why is this important?", and "What is the approach?" which can cause problems as the URLs include a "?" which can cause problems when parsed on services like Twitter.

Some possible solutions:

* find a different encoding for the "?" used in Floe.php (i.e. use %3F unicode).
* maybe there's a MediaWiki function to escape characters?
* change the name of the documents to not use the question marks

        