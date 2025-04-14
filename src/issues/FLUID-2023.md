---json
{
  "title": "FLUID-2023",
  "summary": "Undo does not receive focus \"inmediately\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-12-17T16:56:40.000-0500",
  "updated": "2008-12-19T09:01:57.000-0500",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE 6, IE 7 Win XP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1600/",
      "key": "FLUID-1600",
      "summary": "Pressing the \"Tab\" key to exit edit mode, places focus on the wrong item"
    }
  ],
  "attachments": [],
  "comments": []
}
---
First pass over undo link omits focusing it:

Tab into editable field, hit Enter, edit, tab out: sequence is

tab (out), tab (no element focused), tab (next editable field focused), shift+tab (no element focused),  shift+tab (undo element finally focused),  &#x20;

        