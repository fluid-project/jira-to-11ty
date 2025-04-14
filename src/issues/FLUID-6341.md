---json
{
  "title": "FLUID-6341",
  "summary": "Update the \"Using Grades\" example to use localized UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-09-13T14:25:32.173-0400",
  "updated": "2018-12-05T15:55:58.927-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300",
      "summary": "Implement client-side rerender of UIO based on locale changes"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The infusion example [Using Grades](https://build.fluidproject.org/infusion/examples/framework/preferences/usingGrades/) currently does not implement the localized UIO component added in FLUID-6300. Find a way to implement it and allow the selection of new locales and subsequent dynamic redrawing of the separated panel. This may require splitting the fluid.uiOptions.prefsEditor.localized grade into smaller pieces and use only certain parts of it.

        