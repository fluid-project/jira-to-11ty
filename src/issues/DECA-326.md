---json
{
  "title": "DECA-326",
  "summary": "Combine utils.server.getURL and resourcesource.url",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2012-10-03T16:22:35.610-0400",
  "updated": "2012-10-03T16:22:35.610-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
These 2 utility functions are attempting the same output, a URL, by taking in the different inputs. Would be better to combine into one.

The combination may result the re-construction of the directory identifiers in either export server or capture server.

        