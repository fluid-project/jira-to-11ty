---json
{
  "title": "FLUID-5522",
  "summary": "Treatment of \"function returning gradeName\" is not consistent between \"type\" and \"gradeNames\" component entries",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-10-08T11:19:49.454-0400",
  "updated": "2014-10-30T15:46:27.957-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Whilst it is possible to supply a "function returning gradename" as well as a simple "reference to gradename" in the "gradeNames" entry in a subcomponent, the "type" field only accepts a "reference to gradename". We should fix this so that the semantics are consistent - see IRC discussion at \
<https://botbot.me/freenode/fluid-work/2014-10-08/?msg=23107440&page=1>

        