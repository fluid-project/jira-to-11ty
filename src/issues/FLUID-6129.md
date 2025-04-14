---json
{
  "title": "FLUID-6129",
  "summary": "Change sources cannot be reliably read via IoC-resolved model listeners",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Antranig Basman",
  "date": "2017-02-13T18:55:34.782-0500",
  "updated": "2021-07-29T01:50:08.043-0400",
  "versions": [
    "2.0",
    "2.1",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Data Binder",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The source tracking system for ChangeApplier-mediated changes described at <http://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html#source-tracking-and-filtering-in-model-listener-blocks> has a configurational hole - despite <https://fluidproject.atlassian.net/browse/FLUID-5490#icft=FLUID-5490> ensuring that change sources will cascade through back-to-back model listeners, this has been done via an implementational "back door" that is not possible to address via a context name in a listener definition.

It appears that the back door, implemented in fluid.resolveModelListener, DataBinding.js line 957, used a specially named record `mergeRecord` to avoid polluting the existing context name `source` which is used by dynamic components. We should just stick a "sources" entry into the `change` argument which is already resolved, since otherwise the only route is to invite the user to look into the undocumented argument `transaction`.

        