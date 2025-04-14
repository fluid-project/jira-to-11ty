---json
{
  "title": "FLUID-5886",
  "summary": "Model listeners attached to the same component are not deduplicated by namespace",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-04-12T17:16:45.560-0400",
  "updated": "2016-05-02T12:59:19.545-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2016-05-02T12:59:19.541-0400",
      "body": "The infusion pull request <https://github.com/fluid-project/infusion/pull/703> has been merged at ef4324149aba47693d85f61357feecf6b127a9bf\n\nThe corresponding infusion-docs pull request <https://github.com/fluid-project/infusion-docs/pull/84> has been merged at 9fed41658edc8bd560dce4f39a1611de75608d01\n"
    }
  ]
}
---
FLUID-5865 introduced support for namespaces and constraint-based priorities for model listeners. Unfortunately the current implementation will surprise users who expect (in accordance with the documentation at <https://github.com/fluid-project/infusion-docs/pull/84/files> ) that model listeners attached to the same ChangeApplier will be deduplicated by namespace.&#x20;

We have two opportunities to do this - firstly, when adding the listeners in         that.modelChanged.addListener (the logical place - unfortunately the "namespace" element in "spec" is ignored here), and secondly, as a last-ditch point when collecting outgoing changes in fluid.storeExternalChange - where we could (and I believe used to) apply the spec's "namespace" to the algorithm composing the "keyString". Unfortunately, we do neither.

Given this is contrary to the supplied docs and all expected behaviour, we should consider this a release blocker for 2.0.

        