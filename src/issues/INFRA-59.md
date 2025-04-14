---json
{
  "title": "INFRA-59",
  "summary": "Create a Docker image for our version of CouchDB",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Avtar Gill",
  "reporter": "Alan Harnum",
  "date": "2015-11-02T13:05:11.827-0500",
  "updated": "2016-01-11T10:49:44.035-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-58/",
      "key": "INFRA-58"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-60/",
      "key": "INFRA-60"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-79/",
      "key": "INFRA-79"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2015-11-03T16:56:07.524-0500",
      "body": "CouchDB has recently fallen out of the EPEL for CentOS7: <http://pkgs.fedoraproject.org/cgit/couchdb.git/commit/?h=epel7>\n\n*2015-10-28: Retired because it depends on erlang-mochiweb, which was retired, because it was orphaned for more than six weeks.*\n\nThis is hopefully resolved soon - if not we'll probably have to make a container that builds from source.\n"
    },
    {
      "author": "Avtar Gill",
      "date": "2016-01-11T10:49:30.026-0500",
      "body": "Pull request for this issue:\n\n<https://github.com/idi-ops/docker-couchdb/pull/1>\n"
    }
  ]
}
---
* a containerized CouchDB based on our CentOS container
* built using our CouchDB role: <https://github.com/idi-ops/ansible-couchdb>

        