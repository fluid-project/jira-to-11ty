---json
{
  "title": "FLUID-756",
  "summary": "Create a plan to simplify the architecture of the Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-06-10T16:40:04.000-0400",
  "updated": "2011-02-22T16:27:59.209-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-08-19T11:30:40.000-0400",
      "body": "The Uploader refactoring plan is in place, and documented on the Architecture Sketches page in the wiki: <http://wiki.fluidproject.org/display/fluid/Architecture+Sketches>\n\nRefactoring is taking place in the uploader2 directory of the sandbox.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.205-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
The Uploader's internal architecture currently relies on a bundle of largely stateless functions that require a lot of arguments to be passed into it. This approach is very error-prone, because it doesn't group functionality and required state together in a coherent manner. We need a clearer architectural strategy for breaking Uploader into several units of behaviour that are composed together to form the larger component. This will make the code simpler to work in, more maintainable, and more flexible for consumers.

dev-iteration40

        