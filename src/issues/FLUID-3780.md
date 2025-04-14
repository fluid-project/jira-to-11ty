---json
{
  "title": "FLUID-3780",
  "summary": "fluid.expectFilledSelector() either used incorrectly or documented incorrectly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-10-04T16:48:40.364-0400",
  "updated": "2011-10-14T16:09:52.081-0400",
  "versions": [
    "1.2"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The fluid.expectFilledSelector() function is described in the in-line comment as "Expect that an output from the DOM binder has resulted in a non-empty set of results" i.e. it is described as examining an output of the DOM binder. The only place this function is actually used is inside fluid.initView, where it is used to examine the container parameter, before the DOM binder is even created.

The function seems to examine the container to ensure that if it is a jQuery, that it's not empty. That's a valid thing to check, but it doesn't seem to have much to do with the DOM binder.

I'm not sure if the comment is just wrong (in which case I'd be happy to update it) or if it's actually being used wrong in initView.

        