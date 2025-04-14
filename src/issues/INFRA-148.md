---json
{
  "title": "INFRA-148",
  "summary": "Add additional websites behind load balancers",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2018-03-24T17:34:33.258-0400",
  "updated": "2018-05-15T15:18:24.200-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-15T15:18:24.197-0400",
      "body": "Created TLS certificates and moved the following websites behind the load balancers:\n\nstretch.idrc.ocadu.ca\\\nstretch2.idrc.ocadu.ca\\\nilc.idrc.ocadu.ca\\\njan.idrc.ocadu.ca\\\nnide.idrc.ocadu.ca\\\nopencaps.idrc.ocadu.ca\\\npipedaproject.idrc.ocadu.ca\\\nstatic.idrc.ocadu.ca\\\nwiki.mobile-accessibility.idrc.ocadu.ca\\\nbell-community.idrc.ocadu.ca\n"
    }
  ]
}
---
These websites are not behind the load balancers yet:

* stretch.idrc.ocad.ca
* inclusivelearning.ca (all redirects?)
* mdid.idrc.ocad.ca

        