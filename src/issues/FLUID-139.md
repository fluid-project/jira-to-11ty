---json
{
  "title": "FLUID-139",
  "summary": "Reorderer depends on both Dojo and jQuery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2007-12-01T02:34:25.000-0500",
  "updated": "2008-08-09T14:29:32.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-139/fluid-139-jhung-dec17.patch",
      "filename": "fluid-139-jhung-dec17.patch"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2007-12-17T14:01:26.000-0500",
      "body": "Added implementation for CTRL keys in Fluid.js.\\\nReplaced dojo.keys with fluid.keys in Reorderer.js\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-01-10T16:14:25.000-0500",
      "body": "There are currently still references to dojo in comments which mark places that we may want to refactor to use jQuery.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-08-09T14:29:32.000-0400",
      "body": "This one is a joy to close. 🙂\n"
    }
  ]
}
---
At the moment, the Reorderer uses Dojo 0.9 for DOM manipulation and event binding. We also use jQuery UI for low-level drag and drop support. We will consolidate on a single toolkit, porting the Dojo code to jQuery. This will lightening our download significantly.

        