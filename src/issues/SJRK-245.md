---json
{
  "title": "SJRK-245",
  "summary": "Add integration tests for server datasource onError listeners",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-04-16T17:53:50.267-0400",
  "updated": "2019-04-16T17:53:50.267-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Add integration tests for the listeners defined on the server's three datasource components. If SJRK-244 is completed first, this could take advantage of the fluid.loggingEvent to set up listeners in the test sequence.

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/Fluid.js#L325>

Due to the nature of fluid.loggingEvent as a dynamically-constructed entity, it may be necessary to set up a custom event in the test server that is manually bound to fluid.loggingEvent using the addListener function at the start of the test sequence, and then listen for that custom event later on in the sequence.

        