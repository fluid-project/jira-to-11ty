---json
{
  "title": "FLUID-4188",
  "summary": "Should be possible to refer to selectors listed in components \"styles\" block using direct syntax in renderer trees",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Antranig Basman",
  "date": "2011-04-18T22:15:51.308-0400",
  "updated": "2014-03-03T13:11:05.068-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now, adding a style class decorator in a renderer tree to transfer a value from a component's "styles" block requires the following kind of locution:

{ type: "addClass",\
classes: that.options.styles.columnValue\
}]\
which prevents the tree from being expressed declaratively. A syntax or EL form needs to be supplied to resolve these references directly.

        