---json
{
  "title": "FLUID-5690",
  "summary": "New ChangeApplier fails with stack overflow when applying circularly linked object into model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-06-15T15:27:23.332-0400",
  "updated": "2021-07-29T01:32:12.427-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
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
      "date": "2015-08-20T13:54:51.868-0400",
      "body": "It was believed that this had been addressed as part of the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> work but there seems to be no trace of improvement in fluid.model.stepTargetAccess where there should be the recursion bailout\n"
    }
  ]
}
---
The new ChangeApplier fixes bugs wrt use of arrays as paths, but will fail if a circularly-linked object is applied to the model since the "diff" algorithm will run away attempting to assess the change. This arose in the context of trying to insert socket.io socket objects into a model for the GPII's "browserChannel" implementation - see discussion in IRC at <https://botbot.me/freenode/fluid-work/2015-06-15/?msg=41926924&page=1>

Whilst we don't currently support this form of model contents (although we may be able to in future, in conjunction with the "immutable application" model described at <https://wiki.fluidproject.org/display/fluid/New+New+Notes+on+the+ChangeApplier> ), we should at least supply a sensible diagnostic in this case. We should also as another line of safety have fluid.model.applyChangeStrategy bail out on any kind of exotic object (it's probable that the <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> branch already achieves this as a result of improvements to fluid.isPlainObject).

        