---json
{
  "title": "FLUID-222",
  "summary": "Use a saner mechanism for storing state within the jQuery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-02-07T22:17:37.000-0500",
  "updated": "2011-02-22T16:27:57.804-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-03-02T22:38:32.000-0500",
      "body": "Moved state into jQuery.data. We store a single object, keyed as \"keyboard-a11y\", which contains three properties: the selection context, the user-specified handlers, and the default activate handler.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:57.799-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        