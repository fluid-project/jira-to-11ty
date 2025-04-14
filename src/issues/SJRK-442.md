---json
{
  "title": "SJRK-442",
  "summary": "Rename all \".handlebars\" files to \".hbs\"",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Gregor Moss",
  "date": "2020-12-13T22:27:18.495-0500",
  "updated": "2021-02-26T10:58:24.268-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Rename all Handlebars template files from using the ".handlebars" extension to ".hbs". Server-side aspects of fluid-handlebars are [configured to accept either](https://github.com/fluid-project/fluid-handlebars/blob/8dbb16fa722aeff80eb56527fa0d066f2198c415/src/js/server/inline.js#L98), and client-side configurations currently specify the template directly by name, so this should not be a breaking change.

This change should make it easier to read the template file names in the file tree, as well as some undoubtedly marginal benefits from losing all those extra characters in files that refer to the templates 😉

        