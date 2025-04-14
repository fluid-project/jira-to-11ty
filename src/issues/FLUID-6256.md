---json
{
  "title": "FLUID-6256",
  "summary": "Harden instrumentation and code coverage...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Tony Atkins [RtF]",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-03-07T04:21:39.580-0500",
  "updated": "2024-07-22T10:35:02.081-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current code coverage strategy relies on instrumenting the code separately and then running the browser tests against that code.  This means that running the browser tests in isolation may fail outright if the instrumentation has not been run.  The tests may also fail to reflect recent code changes if the instrumentation has not been run recently enough.

The solution to both is to update to use a newer version of gpii-testem, and to instrument seamlessly as part of the browser test run.

        