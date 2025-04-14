---json
{
  "title": "FLUID-3260",
  "summary": "fl-panel-autoHeading and fl-panel-collapsable seem to compound margin spacing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jacob Farber",
  "reporter": "Jacob Farber",
  "date": "2009-10-08T13:08:04.000-0400",
  "updated": "2014-03-03T14:21:41.924-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Mobile FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2010-03-25T14:23:22.000-0400",
      "body": "After a large cleanup of the markup, problem seems to have been solved.\n"
    }
  ]
}
---
In the artifact view component, the margin spacing on the right of the Cabinet component has twice as much space as it should.&#x20;

Manipulating the fl-panel-autoHeading and fl-panel-collapsable class names seems to affect this.

        