---json
{
  "title": "FLUID-2293",
  "summary": "Implement multi-levels of undo in the UndoManager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Michelle D'Souza",
  "date": "2009-02-24T09:53:37.000-0500",
  "updated": "2013-10-04T10:30:11.332-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options",
    "Undo"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
UIOptions does its own model management for two levels of undo (originalModel, savedModel, model). Instead it should use the UndoManager.&#x20;

        