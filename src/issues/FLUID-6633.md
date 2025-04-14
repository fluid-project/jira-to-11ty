---json
{
  "title": "FLUID-6633",
  "summary": "Entering non-numeric text into the steppers results in the min value being set.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-06-28T13:32:32.019-0400",
  "updated": "2021-06-28T14:31:33.475-0400",
  "versions": [
    "3.0"
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
The design of the system expects that entering in non-numeric values are rejected and replaced with the previous input.

Steps to reproduce:

1. Open the [UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the prefs editor
3. In one of the textfield steppers (e.g. text size, line spacing) enter a non-numeric value.
4. Press the "enter" key or move focus to save the new value.
5. Notice that the value switches to the smallest value instead of to what was previously in the field.

        