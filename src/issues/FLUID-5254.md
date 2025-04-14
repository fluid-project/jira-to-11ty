---json
{
  "title": "FLUID-5254",
  "summary": "Raw listeners registered via IoC to injected event cannot be removed",
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
  "date": "2014-01-16T22:08:30.525-0500",
  "updated": "2015-05-21T09:22:14.532-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-01-16T22:38:05.585-0500",
      "body": "Part of this fix requires the fix to <https://fluidproject.atlassian.net/browse/FLUID-5242#icft=FLUID-5242>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-05-21T09:22:10.535-0400",
      "body": "Merged into trunk at revision f13dda69b9f2b8f1cf8a0eb98fc568416f09108e (Feb 5, 2014)\n"
    }
  ]
}
---
A listener which is registered via IoC via the "dispatchListener" route (e.g. one registered to an event which was itself injected via IoC) with no other identifying information (e.g. a namespace or function name) cannot be removed. This is because dispatchListener does not apply the standard "impersonateListener" workflow for all listeners which receive wrapping prior to registration. This issue was discovered during the KETTLE-20 error handling work and blocks those fixes.

        