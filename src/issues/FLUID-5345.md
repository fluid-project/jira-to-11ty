---json
{
  "title": "FLUID-5345",
  "summary": "Failure with sequence ending with 2 listener elements in a row in IoC Testing Framework",
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
  "date": "2014-04-30T11:08:31.216-0400",
  "updated": "2014-08-30T05:09:03.279-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5502/",
      "key": "FLUID-5502"
    }
  ],
  "attachments": [],
  "comments": []
}
---
This was encountered whilst developing tests for the metadata component's resource input panel. This has not yet been reduced to a standalone test case, but the symptoms were odd - in one order the test stalls at sequence point 2 of 2, and in the other order, the test reaches 3 of 2 but then fails with "fixture is undefined". Discussion was on IRC at <https://botbot.me/freenode/fluid-work/2014-04-30/>

Branch is checked in for investigation at  <https://github.com/jobara/metadata/tree/FLOE-116-broken-IoCTestingSequence>

        