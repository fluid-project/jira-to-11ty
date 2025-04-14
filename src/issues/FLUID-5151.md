---json
{
  "title": "FLUID-5151",
  "summary": "One single listener function hooked up for multiple model paths only have the last call registered succesfully",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2013-09-24T11:57:07.761-0400",
  "updated": "2014-04-02T16:13:48.257-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:13:48.246-0400",
      "body": "The new changeapplier eliminates this problem\n"
    }
  ]
}
---
If the same listener function was hooked up for multiple model paths, such as:

var listenerToFire = function () {\
....\
};

applier.modelChanged.addListener("path1", listenerToFire);\
applier.modelChanged.addListener("path2", listenerToFire);

When change requests are issued for both "path1" and "path2", rather than having the listener function being triggered twice, only the change request on "path2" is triggered, which leads to an impression that only the last call was registered successful.

A pull request has been sent for demonstrate this issue: <https://github.com/fluid-project/infusion/pull/409>

        