---json
{
  "title": "ENGAGE-106",
  "summary": "Infusion's fluid.model.parseEL() function is broken in Kettle when Strings originated in Java code",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2009-10-04T11:54:42.000-0400",
  "updated": "2009-10-05T17:54:12.000-0400",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-106/ENGAGE-106-a.patch",
      "filename": "ENGAGE-106-a.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-04T11:57:53.000-0400",
      "body": "Here's a patch that fixes the issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T13:03:07.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T17:23:40.000-0400",
      "body": "I've resolved this issue within fluid.model.parseEL() in Infusion. Needs review from Bosmon.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T17:54:12.000-0400",
      "body": "I have reviewed this and the patch looks correct, and has not disrupted the renderer tests. It is an awkward feature of the language that it is necessary 😛\n"
    }
  ]
}
---
parseEL() calls .toString() on the incoming EL path. In cases where the value is actually a bridged java.lang.String, toString() doesn't work. We should be explicitly coercing the value with String(EL) instead.

        