---json
{
  "title": "SJRK-438",
  "summary": "Use fluid-json-schema to validate data migrations",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-13T21:00:06.987-0500",
  "updated": "2020-12-13T21:00:07.147-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-131/",
      "key": "SJRK-131"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Use [fluid-json-schema](https://github.com/fluid-project/fluid-json-schema) for validating database migrations, rather than the hand-rolled system that's based on the old GPII Universal code.

More info on that package's validator can be found here: <https://github.com/fluid-project/fluid-json-schema/blob/HEAD/docs/validator.md>

        