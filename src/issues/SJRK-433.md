---json
{
  "title": "SJRK-433",
  "summary": "Database migration scripts should exit gracefully",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-02T12:26:01.468-0500",
  "updated": "2020-12-02T12:28:17.461-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The current database migration script ("undefined to 0.0.1") does not exit gracefully when validation issues are spotted. This should probably exit with code 0 if a story has validation issues, rather than exiting with code 1. Code 1 (or other non-zero codes) should be reserved for "actual" errors, i.e. issues connecting to the database, write errors, etc.

To illustrate the need for this change, the latest migration of the SJRK Stories site ran correctly, but raised two validation issues (which were expected) and therefore exited with code 1, indicating an error had occurred:

```java
bash-5.0# node migrate_undefined_to_0.0.1.js http://db:5984/stories
.
.
. (glossing over many updates)
.
.
14:29:22.102:  Updating the story with ID: f378a100-f11f-11e9-9409-319b90678833
14:29:22.102:  Updating the story with ID: storyExample
14:29:22.492:  -- -- --
14:29:22.492:  Updated 21 of 22 documents.
14:29:22.492:  -- -- --
14:29:22.526:  eba1c640-f863-11ea-9fdd-552aa35bda8b is invalid:
14:29:22.526:  - Block at index 9: key 'order' does not have the expected value of '9' and is instead '10'
14:29:22.527:  - Block at index 10: key 'order' does not have the expected value of '10' and is instead '9'
14:29:22.527:  --
14:29:22.528:  FATAL ERROR: Uncaught exception: 1 invalid document detected
(No error stack)
```

        