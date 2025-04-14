---json
{
  "title": "FLUID-4920",
  "summary": "UIOptions dropdowns have a label with for attribute that points to a non-existent id.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2013-02-19T13:05:47.214-0500",
  "updated": "2013-02-19T15:10:49.011-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4718/",
      "key": "FLUID-4718",
      "summary": "Dropdowns are not correctly associated with their labels"
    }
  ],
  "attachments": [],
  "comments": []
}
---
<http://build.fluidproject.org/infusion/demos/uiOptions/demo.html>

If you take a look at the demo and try inspecting drop-down controls within one of the UI Options panels you will notice that the there is a label for a drop-down (for example: \<label for="theme-selection">Colour & Contrast\</label>) that has points to a select attribute with missing id (e.g. theme-selection).

        