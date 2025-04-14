---json
{
  "title": "FLUID-3430",
  "summary": "cache key is not generated for single module \"framework\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-12-11T15:39:44.000-0500",
  "updated": "2009-12-15T19:04:51.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-12-11T16:20:26.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-12-11T16:23:26.000-0500",
      "body": "corrected this by removing use of empty function and instead using compare with empty string. created a test to confirm that this works.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-12-15T19:04:51.000-0500",
      "body": "I've reviewed Laurel's fix for this issue and the associated unit test. +1 for Builder 1.1.2\n"
    }
  ]
}
---
While testing the cache primer, I discovered that using a single module of "framework" as the input for builder.php does not generate cache key. This is impossible to replicate with the builder interface right now because we automatically generate dependencies and ignore when users uncheck dependencies.

        