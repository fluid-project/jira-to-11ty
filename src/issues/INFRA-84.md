---json
{
  "title": "INFRA-84",
  "summary": "Implment OwnCloud instance",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-07-11T13:36:25.390-0400",
  "updated": "2016-08-22T09:38:10.379-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T09:38:10.377-0400",
      "body": "OwnCloud has been running for a few months now at [https://files.inclusivedesign.ca](https://files.inclusivedesign.ca/) (hosted on i-0033 as a Docker container using the official image).\n\nThere have been issues with files that do not get synchronized or can't be deleted. They have required manual intervention (either accessing the SQLite3 database directly to erase locks or restarting ownCloud).\n"
    }
  ]
}
---
We're currently using an OwnCloud instance that is running from the official Docker image published by the OwnCloud.org project. It has numerous flaws including not running periodic tasks like cron.php. We need to implement this properly with our own image, monitoring, etc.

        