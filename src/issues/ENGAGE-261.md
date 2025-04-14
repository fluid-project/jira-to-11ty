---json
{
  "title": "ENGAGE-261",
  "summary": "Allow fluid.engage.renderUtils.createRendererFunction to take in a selector for the renderer container",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-01-20T14:48:10.000-0500",
  "updated": "2014-03-03T14:15:37.151-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-22T09:22:30.000-0500",
      "body": "resolved at r9066&#x20;\n\nfluid.engage.renderUtils.createRendererFunction can now take in a selector for the renderer container.&#x20;\n"
    }
  ]
}
---
Allow fluid.engage.renderUtils.createRendererFunction to take in a selector for the renderer container

Currently it needs a jquery of the renderer container, the helper function though should allow the user to pass in a simple selector instead and convert this into a jquery object.

        