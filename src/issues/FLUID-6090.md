---json
{
  "title": "FLUID-6090",
  "summary": "Provide a state tracking component that signals changes in state",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2016-12-02T11:22:46.034-0500",
  "updated": "2017-01-06T17:16:20.454-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Joseph Scheuhammer",
      "date": "2016-12-09T11:15:54.358-0500",
      "body": "FIrst checkin:\n\n* <https://github.com/klown/infusion/tree/FLUID-6090/src/components/stateTracker/>\n* <https://github.com/klown/infusion/tree/FLUID-6090/tests/component-tests/stateTracker/>\n"
    },
    {
      "author": "Joseph Scheuhammer",
      "date": "2017-01-06T17:03:09.336-0500",
      "body": "Pull requests:\n\n* Code: <https://github.com/fluid-project/infusion/pull/797>\n* Documentation:  <https://github.com/fluid-project/infusion-docs/pull/113>\n"
    }
  ]
}
---
One of the original requirements for the [GPII ProcessReporter](https://issues.gpii.net/browse/GPII-442) was that it support detection of a solution changing state from running to not-running and vice versa.  At present, this functionality is no longer desired by GPII.  But, it has been suggested that said functionality should be moved into infusion for more general usage, i.e. not just processes, but anything that changes state.

        