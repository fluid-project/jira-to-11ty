---json
{
  "title": "SJRK-137",
  "summary": "Add tests for templateManager's resolveTerms call by renderTemplate",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-04T17:05:42.424-0400",
  "updated": "2018-11-28T12:12:56.712-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
There are tests for the templateManager component's resolveTerms function and renderTemplate invoker (and its associated function, sjrk.storyTelling.templateManager.renderTemplate), but there are not tests to make sure that the terms as passed into the renderTemplate function are resolved correctly against the combinedDynamicValues object.

E.g. if the call to resolveTerms is altered to pass in \`undefined\` instead of combinedDynamicValues, the tests pass, but the substitution is not actually happening.

        