---json
{
  "title": "KETTLE-92",
  "summary": "kettle.test.request.http used to accept full URL before Kettle 2.0 release",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2021-01-19T08:24:21.245-0500",
  "updated": "2021-01-20T16:14:34.235-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
As part of the refactoring for the Kettle 2.0 release, where we consolidated Kettle's and Infusion's implementation of DataSources, we inadvertently regressed the ability of kettle.test.request.http to accept a full URL in the "url" property in addition to the broken-out parsed fields. We should restore this.

        