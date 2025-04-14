---json
{
  "title": "SJRK-215",
  "summary": "Use fluid.changeElementValue instead of testUtils function",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-02-07T15:19:54.989-0500",
  "updated": "2019-02-07T15:19:54.989-0500",
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
In the test sequences that require affecting changes on the DOM, use fluid.changeElementValue() instead of sjrk.storyTelling.testUtils.changeFormElement(). The latter is effectively duplicating the functionality of the former. Instead of passing in "{component}" and "selector", simply pass in "{component}.dom.selector" for the first param.

Once the calls have been replaced, remove this function from the codebase.

        