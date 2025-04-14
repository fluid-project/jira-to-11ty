---json
{
  "title": "FLUID-4157",
  "summary": "instantiator.clearComponent() crashes on encountering non-Component material",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-03-22T16:28:28.041-0400",
  "updated": "2014-03-03T13:12:14.718-0500",
  "versions": [
    "1.3.1"
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
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-03-25T00:01:44.019-0400",
      "body": "New recursive implementation of instantiator.clearComponent uses a refactored utility broken out of IoC into public utility fluid.visitComponentChildren\n"
    }
  ]
}
---
The new recursive implementation of instantiator.clearComponent has a substandard implementation which makes an assumption that every traversed element is a component. This assumption is not true in general - component trees may contain arbitrary non-component material, assuming typeName and id are missing.

(13:22:01) Isle of Yura: fluid.each(child.options.components, function(gchild, gchildname) { 10966                that.clearComponent(child, gchildname);   10967            }); \
(13:22:16) Isle of Yura: so child is not really a component 🙂\
(13:22:25) Isle of Yura: it's a function that 	returns an object\
(13:22:29) Isle of Yura: so it has no options

        