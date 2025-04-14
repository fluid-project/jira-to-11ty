---json
{
  "title": "FLUID-5077",
  "summary": "Cannot add the same listener to multiple paths for the same ChangeApplier event",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2013-07-02T04:01:32.458-0400",
  "updated": "2015-06-17T10:31:30.709-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4258/",
      "key": "FLUID-4258",
      "summary": "Create declarative syntax for wiring cooperating changeAppliers and registering guards/listeners"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-11-18T20:22:46.594-0500",
      "body": "This issue was resolved as part of the <https://fluidproject.atlassian.net/browse/FLUID-4258#icft=FLUID-4258> model relay-aware \"new ChangeApplier\" work. \"Guards\" are removed and the configuration achieving the above effect looks like this:\n\nmodelRelay: \\[{\\\ntarget: \"pageCount\",\\\nsingleTransform: {\\\ntype: \"fluid.transforms.free\",\\\nargs: {\\\n\"totalRange\": \"{that}.model.totalRange\",\\\n\"pageSize\": \"{that}.model.pageSize\"\\\n},\\\nfunc: \"fluid.pager.computePageCount\"\\\n}\n\n(from Pager.js)\n"
    }
  ]
}
---
Discovered during pager rewrite for <https://fluidproject.atlassian.net/browse/FLUID-4035#icft=FLUID-4035>. In the following sequence, we want the same listener to guard two paths:

that.applier.postGuards.addListener({path: "pageSize", transactional: true}, \
fluid.pager.pageCountGuard);\
that.applier.postGuards.addListener({path: "totalRange", transactional: true}, \
fluid.pager.pageCountGuard);

As a result of the sleazy "implementation sharing" with the underlying Fluid event firer, the system recognises this as an attempt to add the same listener which is given the same namespace each time and so dislodges itself. It would probably be better just to get rid of the implementation sharing given this complicates the implementation both of the basic Fluid events system (with its peculiar "fireToListeners" method) and DataBinding alike.&#x20;

        