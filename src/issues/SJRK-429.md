---json
{
  "title": "SJRK-429",
  "summary": "Refactor or remove DB migration script's argument pipeline",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-11-24T18:35:04.322-0500",
  "updated": "2020-11-24T18:35:04.322-0500",
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
[Review feedback](https://github.com/fluid-project/sjrk-story-telling/pull/102#pullrequestreview-536966484) from @@Antranig Basman on the SJRK-425 pull request suggests refactoring or removing the "updatedDocs" return value and the accompanying structure that passes them along from the data migration script(s).

> Given the return values of all these functions are ignored by the caller, it seems odd to return them.\
> You could either axe the returns, or else turn this into a slightly more "functional" pipeline involving fluid.promise.fireTransformEvent - this seems to make sense since the yielded value from sjrk.storyUpdate.updateStoriesData is actually supplied to sjrk.storyUpdate.updateDB - the latter can then get the signature sjrk.storyUpdate.updateDB(updatedDocs, options). "responseString" then becomes the previous payload in the chain.\
> This would also result in some simplification of the logic in gpii.dbRequest.createResponseHandler which accepts a function returning a promise, and then accepts another promise - it could then simply return a promise for its yielded result.

        