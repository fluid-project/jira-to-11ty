---json
{
  "title": "KETTLE-79",
  "summary": "Add facility to index module-relative material mounted by static middleware",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-07-25T12:50:35.171-0400",
  "updated": "2020-11-04T18:20:36.065-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
KETTLE-78 created an static system for hosting static middleware which can be inspected in order to correlate the module-relative mount points of any material with the path they are hosted at. This will help with work on the "new renderer" allowing markup templates to be expressed with module-relative includes which can then be rewritten in order to resolve onto whatever path the material is hosted at.

Part of this implementation can be acquired from the "authoring demo" implementing the old "Visible Nexus" - <https://github.com/amb26/fluid-authoring/blob/FLUID-4884/src/server/js/IncludeRewriting.js>

        