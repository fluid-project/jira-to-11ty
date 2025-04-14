---json
{
  "title": "FLUID-3505",
  "summary": "ChangeApplier not handled properly by options merging",
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
  "date": "2010-02-26T10:19:51.000-0500",
  "updated": "2011-01-20T15:11:34.274-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3675/",
      "key": "FLUID-3675",
      "summary": "Create options merging and \"component grading\" infrastructure that will allow passage of destructible items"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-08-02T03:16:32.471-0400",
      "body": "This issue is resolved by the fix to <https://fluidproject.atlassian.net/browse/FLUID-3675#icft=FLUID-3675> - or at least, that fix creates a reasonably consistent way of passing \"models\" (or anything else which might be destroyed by copying) through the options merging pipeline. This is done by specifying the \"preserve\" merging strategy at the options path holding the destructible thing (e.g. \"model\"). More work is required on \"component grading\" in order to make this automatically applied to options which have a standard layout.\n"
    }
  ]
}
---
If a ChangeApplier is provided to a component through the creator function's options structure, the options merging process carried out by fluid.initView() doesn't quite deal with the applier properly, and subsequent requests by the component to modify the model don't affect the model properly. It's possible that I shouldn't be expecting to be able to pass an applier as an option, in which case fine, perhaps someone can advise me of an alternative 🙂

In the meantime, referencing the applier directly is a functional workaround:

cspace.myComponent = function (container, options) {\
var that = fluid.initView("cspace.myComponent", container, options);\
that.options.applier = options.applier;       //  <<==== workaround\
....

        