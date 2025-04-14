---json
{
  "title": "FLUID-6399",
  "summary": "Resource loader does not cleanly handle multiple fetch errors in the same grade.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2019-09-23T08:41:51.167-0400",
  "updated": "2024-07-19T08:02:44.910-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In working with resource loaders on my own, I encountered the following if more than one resource can't be fetched:&#x20;

> Assertion failure - check console for more details: Error: rejecting promise {"disposition":"reject","value":{"isError":true,"status":404,"textStatus":"Not Found"}}which has already received "reject""

It looks like a single promise is used for more than one fetch, instead of either failing on the first error or accumulating the rejections as we've done elsewhere.

[The tests current test for a single failure](https://github.com/amb26/infusion/blob/FLUID-6148/tests/framework-tests/core/js/ResourceLoaderTests.js#L370), adding a grade with two resource definitions that point to `/notfound` should be sufficient to reproduce the problem.

        