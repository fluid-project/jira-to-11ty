---json
{
  "title": "FLUID-6291",
  "summary": "Buildkite unblocker service doesn't work sometimes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Giovanni Tirloni",
  "date": "2018-06-28T12:48:41.019-0400",
  "updated": "2024-07-24T12:57:08.950-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-24T12:57:08.776-0400",
      "body": "no longer using buildkite\n"
    }
  ]
}
---
Sometimes a build is not unblocked by the service and needs to be unblocked manually.

Happens with gtirloni on fluid-project/infusion and also happened with amb26 on fluid-project/kettle

        