---json
{
  "title": "FLUID-3361",
  "summary": "Multiple calls are made to callback supplied to fluid.fetchResources",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-11-05T14:01:09.000-0500",
  "updated": "2009-11-13T09:18:08.000-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
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
      "date": "2009-11-05T14:23:41.000-0500",
      "body": "A flag has been added to prevent multiple invocations of the callback. Surprising that this has escaped notice so far, since it might well be the source of a lot of performance problems. Test case for this condition has been integrated with the fixed test case for <https://fluidproject.atlassian.net/browse/FLUID-3362#icft=FLUID-3362>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:18:08.000-0500",
      "body": "tests seem to be passing\n"
    }
  ]
}
---
Currently, the callback supplied to fluid.fetchResources appears to be called n+1 times for a fetch of n resources.

        