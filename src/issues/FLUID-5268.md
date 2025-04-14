---json
{
  "title": "FLUID-5268",
  "summary": "Newly implemented \"afterDestroy\" event does not function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-02-07T00:02:04.884-0500",
  "updated": "2015-06-17T10:30:45.203-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-15T15:47:59.887-0400",
      "body": "Merged into trunk at revision 0da0209c63c97cb3f422b8a21e4c8d33f4156d47 on November 9, 2014. There are still believed to be a few lingering bugs with fluid.recordListener\n"
    }
  ]
}
---
As part of the <https://fluidproject.atlassian.net/browse/FLUID-5185#icft=FLUID-5185> work it was required to implement a fresh event "afterDestroy" in order to correct a problem with the IoC framework clobbering markup belonging to test fixtures before their teardown was complete (important for Tooltip tests). Unfortunately this event was implemented hastily and in fact did not work at all - any listeners attached to it will not be notified. This causes tests written using the IoC testing framework to fail in a deceptive way - only the first fixture scheduled via fluid.tests.testTests would run and the rest would be ignored. This would make it appear that there were no failing tests, whereas in fact large numbers of the tests were just being skipped.

This turned out to be a bug with a reasonably sophisticated cause. Despite these listeners being successfully registered, the framework was being overeager in using the registration scheme operated by fluid.recordListener to strip them out again during the process of component destruction - thus by the time fluid.afterDestroy was invoked, they had all been removed.

We can take the opportunity to fix the bug as well as make fluid.recordListener more efficient - in fact there's no need for it to record listeners which are registered from the same component onto itself (which is how all conventional listener records appear to the IoC framework) since for these we assume the entire component will be GCed in any case. It is only critical to operate fluid.recordListener in cases where listeners are injected into other components in the tree, which would cause a leak if they were not removed along with the originating component.

Together with FLUID-4890 this fix should produce a system which is more reliable as well as more efficient.

        