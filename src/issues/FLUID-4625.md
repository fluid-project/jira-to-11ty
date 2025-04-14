---json
{
  "title": "FLUID-4625",
  "summary": "ChangeApplier does not match paths correctly where change is applied at a higher level than listener (fluid.pathUtil.matchPath)",
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
  "date": "2012-02-28T17:20:53.269-0500",
  "updated": "2014-03-03T13:00:08.834-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-02-29T00:18:19.126-0500",
      "body": "The supplied fix quickly changes the logic just in matchPath, but the tests we write are against the functional behaviour of model listeners.\\\nIn practice we may want a better implementation which explodes composite changes into\\\nsmaller increments so that we can avoid unnecessary notifications, but this at least covers the case\\\nof missed notifications\n\nNote that this logic originally came from  \\\n<https://github.com/rsf/PonderUtilCore/blob/master/src/uk/org/ponder/beanutil/support/ListBeanPredicateModel.java>\\\nin this version, the treatment of \"spec\" and \"path\" is completely asymmetric, which is at least consistent. It's hard to recall what motivated the current framework \"partially asymmetric\" version which treats changes at the root differently to those at other places.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-03-21T15:38:24.560-0400",
      "body": "Merged into project repo at 1ff854d2bf0a8d71fbb33c9bfb9e70e8dec1c1d6\n"
    }
  ]
}
---
In DataBinding.js, line 381 this implementation appears to be have been installed quite deliberately

if (!spec || path === "") {\
break;\
}\
if (!path) {\
return null;\
}

for reasons which are no longer clear. This fails to notify listeners of changes applied at higher paths - for example, a change at path "selections" does not hit a listener at path "selections.lineSpacing". To be completely accurate, the applier might iterate through subobjects in order to determine the exact set of changes to avoid unnecessarily notifying listeners - but all the same, the current behaviour has to be considered definitely incorrect since there are clearly cases where listeners are not notified when changes occur. This is currently causing problems in the UIOptions-videoPlayer media panel integration work.

        