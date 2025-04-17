---json
{
  "title": "FLUID-6242",
  "summary": "Move messageResolver out of Renderer.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-01-22T10:34:27.118-0500",
  "updated": "2024-07-22T08:59:58.601-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-01-23T07:14:52.735-0500",
      "body": "Antranig Basman and I agreed to review this as part of the existing \"stringTemplate\" pull:\n\n<https://github.com/fluid-project/infusion/pull/871>\n"
    }
  ]
}
---
In preparation for [GPII-2444](https://issues.gpii.net/browse/GPII-2444), Antranig Basman and I have discussed moving the message resolver out of the renderer.  We initially discussed moving this to Fluid.js, but as the grade requires FluidIoC.js to operate, we moved it to a new file instead.  Anything using the renderer will now need to require the new core MessageResolver.js file.

        