---json
{
  "title": "FLUID-6563",
  "summary": "Support disabled state for switch component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-10-26T14:58:13.173-0400",
  "updated": "2020-10-27T08:47:12.739-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6539/",
      "key": "FLUID-6539",
      "summary": "Investigate implementing switch components using a button element"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Once FLUID-6539 is merged, the Switch component will gain support for a disabled state as it's now built using a native `<button>` element. This will need to be tested in all the contrast themes, with special attention paid to the binary contrast themes.

        