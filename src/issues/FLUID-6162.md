---json
{
  "title": "FLUID-6162",
  "summary": "Consider schemes for aligning JSON Schema's reuse model with Infusion's",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-06-02T12:39:37.899-0400",
  "updated": "2024-07-22T09:15:08.671-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
We have a number of use cases coming up where we require to employ JSON schema material to validate material, which may form Infusion component options or may be other material such as GPII preferences, preference sets, solution entries, etc.&#x20;

<http://the-t-in-rtf.github.io/drafts/infusion-and-json-schema-reuse.html> contains a good exploration of the relationship between JSON schema and Infusion's model for reuse. These are not perfectly aligned in a number of respects, for example, the overriding model applied for complex directives such as anyOf, allOf, etc. applies an "all or nothing" approach whereby any merging value wholly replaces that in a base document. This makes for easily predictable results, but makes some reuse scenarios more complex as well as requiring special support for coordinating with Infusion's overriding rules.

In <https://pad.gpii.net/p/pcp-api-7g124ngs> , we have explored some options for aligning these schemes and their relationships, as well as exploring some further reuse problems, for example with respect to required fields.

        