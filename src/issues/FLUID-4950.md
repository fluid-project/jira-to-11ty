---json
{
  "title": "FLUID-4950",
  "summary": "Unnecessary div in contrast panel label",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2013-03-27T12:10:49.246-0400",
  "updated": "2015-06-15T09:54:10.865-0400",
  "versions": [
    "1.5"
  ],
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
The template for the UIO contrast panel has a div for the diagonal line (class="fl-crossout"). It is only used for the default theme choice, but is present for all themes, as a result of how the renderer is creating the markup.&#x20;

This isn't efficient/clean and should be rethought.

        