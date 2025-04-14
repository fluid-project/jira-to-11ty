---json
{
  "title": "SJRK-415",
  "summary": "Use ContextAwareness to refactor authoringEnabled",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-10-26T14:23:09.376-0400",
  "updated": "2020-10-26T14:23:09.376-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Take advantage of the [ContextAwareness API](https://docs.fluidproject.org/infusion/development/ContextAwareness.html) to determine whether to include the various pieces of configuration which are dependent on authoringEnabled being true or false.

Specifically, rather than passing the value of authoringEnabled into various server request handlers, the Infusion configuration for these request handlers can automatically be included or excluded. Since this is likely to affect the server tests, this may also be a good opportunity to tackle <https://fluidproject.atlassian.net/browse/SJRK-241#icft=SJRK-241>.

        