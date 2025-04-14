---json
{
  "title": "FLUID-5122",
  "summary": "Comment schema-specific parts of starter panels in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2013-08-29T17:10:43.449-0400",
  "updated": "2021-07-29T01:39:00.161-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The starter panels included with UIO are used for both the schema-based approach and the non-schema-based approach. They include some code (such as the preferenceMap) that is only relevant to the schema version.

It would be helpful to integrators if we put comments on these parts to clarify things. Many people look at the code and not at the docs.

        