---json
{
  "title": "FLUID-3348",
  "summary": "refactor tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-03T14:15:02.000-0500",
  "updated": "2009-12-02T13:40:24.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
ColinClark said: I found your tests really difficult to debug, due to the strange way you've structured them. It looks like you committed a big refactoring to these tests back at r7673, and I'm not sure it was entirely for the best. By moving your test functions out into these "generateXyz" functions on a "pseudo-that" called "testingFunctions," you make it harder to set breakpoints in a specific test, rather than for the general case of all similar tests. It also makes readability more difficult. This feels to me like an attempt to remove repetitive code, but at the wrong level of abstraction. I really like how thorough all of these tests are, but I find it hard to quickly see the difference between utility code, setup code, and the test bodies.

At some point in the future, let's consider what it would take to split up these tests into smaller units based. That said, I don't think we want to invest the time in reworking these tests yet again before we get the Builder released. It's something you'll probably encounter yourself as you use Firebug to track down this issue, but something that can wait for a bit.&#x20;

        