---json
{
  "title": "FLUID-5252",
  "summary": "Improve diagnostics from IoC testing framework in the case of an event hang",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-01-15T03:53:07.264-0500",
  "updated": "2015-06-26T09:55:47.232-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-20T17:36:24.366-0500",
      "body": "Merged into trunk at revision <https://github.com/fluid-project/infusion/commit/d591ebe6e5f2475dffda1ffbdd12d4247de9de09> Aug 22 2014\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.918-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
When run in the browser, the IoC testing framework provides a helpful UI (assuming that ProgressiveEnhancement.js is included) dynamically updating as each sequence point in a "sequence" test fixture is reached, which can be helpful in diagnosing at what point an expected event has failed to be received. In general, in an asynchronous framework, a "hang" is the only response where the next fixture element consists of a listener which must be activated in response to some action performed by the previous element, but the event in question never fires.

When performing tests at the console, e.g. for node.js-based tests, this UI is not available, making the cause of failures more obscure. It would be hard to apply a similar dynamic interface to the browser-based one, but one possibility is a form of "dead man's switch" notification. The IoC testing framework could be configured with a timeout parameter, say, defaulting to 2 seconds, which after that interval waiting in vain for a listener element, would log a message identifying the current sequence point to the console. Every time a listener responds, this timeout would be cleared.

        