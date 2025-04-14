---json
{
  "title": "FLUID-5098",
  "summary": "TOC container is not well defined in demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-07-22T14:05:55.238-0400",
  "updated": "2025-01-15T10:51:44.236-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "4.8.0"
  ],
  "components": [
    "Demos",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-12-05T07:34:33.703-0500",
      "body": "[PR #1108](https://github.com/fluid-project/infusion/pull/1108) merged into the project repo at [41fe77a](https://github.com/fluid-project/infusion/commit/41fe77a54f2c86008d877426269d7a7e62580c25).\n"
    }
  ]
}
---
The demo html file has a block of markup sectioned off with comments to show the Separated Panel UIO's markup. \
<https://github.com/fluid-project/infusion/blob/master/src/webapp/demos/uiOptions/html/uiOptions.html#L79-L92>

However, the table of contents container lives outside of this, as it needs to be set by the integrator. This of course would likely not be in the same portion of markup that the Separated Panel occupies. The issue though is that since the markup block for UIO is so well defined, the container for ToC is lost on the page, and it isn't obvious from looking at the demo that you need to specify it.

<https://github.com/fluid-project/infusion/blob/master/src/webapp/demos/uiOptions/html/uiOptions.html#L79-L92>

        