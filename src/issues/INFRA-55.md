---json
{
  "title": "INFRA-55",
  "summary": "Implement persistent storage setup for Kubernetes",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Technical task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Alan Harnum",
  "date": "2015-11-02T10:30:03.255-0500",
  "updated": "2017-09-21T10:31:35.595-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-09-21T10:31:35.593-0400",
      "body": "This was created for a demo cluster back in 2015 but we ended up choosing a different solution at the time. Closing ticket to document this and will open new ones for other automation work I'll need to do.\n"
    }
  ]
}
---
We'll want to be able (now or in the future) to run containerized applications with persistent data. The most viable models for our needs appear to be either NFS or Ceph.

Background reading:\
<https://github.com/kubernetes/kubernetes/blob/release-1.0/docs/user-guide/volumes.md>\
<https://github.com/kubernetes/kubernetes/blob/release-1.0/docs/user-guide/persistent-volumes.md>

@@Giovanni Tirloni's notes on failure modes of NFS:

* Something to write a lot of meaningful data to the disk while crash happens and be able to check consistency (candidates: MySQL, InfluxDB, CouchDB)

- Failure modes:

* Server A or B stops receives each other heartbeats and doesn't know who is the master anymore => Split brain situation
* Server A or B dies, is reinstalled from scratch and wants to join cluster (sync with remaining healthy node)

- Server A primary / Server B secondary => Server A shuts down and stays down
- Server A primary / Server B secondary => Server B shuts down and stays down
- Server A secondary / Server B primary => Server A shuts down and stays down
- Server A secondary / Server B primary => Server B shuts down and stays down

* Server A primary / Server B secondary => Server A hard resets and tries to join cluster as healthy node
* Server A primary / Server B secondary => Server B hard resets and tries to join cluster as healthy node
* Server A secondary / Server B primary => Server A hard resets and tries to join cluster as healthy node
* Server A secondary / Server B primary => Server B hard resets and tries to join cluster as healthy node

        