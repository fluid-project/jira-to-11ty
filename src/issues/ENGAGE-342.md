---json
{
  "title": "ENGAGE-342",
  "summary": "Performance of 0.3 is slow even when hitting from an iPhone on wifi",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jess Mitchell",
  "date": "2010-02-08T16:04:15.000-0500",
  "updated": "2014-03-03T14:12:44.766-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-434/",
      "key": "ENGAGE-434",
      "summary": "Implement \"All in one page\" portalised solution to remedy performance issues in Engage on mobile devices"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-342/ENGAGE-342-timing.patch",
      "filename": "ENGAGE-342-timing.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-342/metrics.numbers",
      "filename": "metrics.numbers"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-342/metrics.xls",
      "filename": "metrics.xls"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-19T10:19:57.000-0500",
      "body": "Here's a very raw patch with modifications to Home.html and Browse.html to show head resource load times.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-22T17:46:09.000-0500",
      "body": "Attaching a spreasheet (metrics) containing the data on load times for engage in both numbers and excel formats\n"
    }
  ]
}
---

        