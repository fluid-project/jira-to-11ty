---json
{
  "title": "FLUID-3507",
  "summary": "ChangeApplier doesn't handle wildcards in change request paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2010-02-26T16:20:34.000-0500",
  "updated": "2011-01-20T15:10:53.011-0500",
  "versions": [
    "1.1.2",
    "1.2beta1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T03:10:58.491-0400",
      "body": "This should now be resolved as part of the <https://fluidproject.atlassian.net/browse/FLUID-3680#icft=FLUID-3680> work - see test cases for examples of wildcard registration, and also for \"issuing changes against root\"\n"
    }
  ]
}
---
It is not possible to request an update to an entire model using a wildcard ("\*") as the path in a change request. I believe listeners can support wildcards, but not change requests.

So for example, you can't have the following scenario:

var model = { foo: "bar", foofer: "barbar", fu: "bat" };\
var applier = fluid.makeChangeApplier(model);\
var newModelValues = { foo: "NewBar", foofer: "NewBarBar", fu: "CATT" };\
applier.requestChange("\*", newModelValues);

        