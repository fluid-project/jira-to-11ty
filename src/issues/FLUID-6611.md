---json
{
  "title": "FLUID-6611",
  "summary": "Line-spacing may not increment correctly when the base line-height is set to \"normal\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2021-04-01T14:27:36.750-0400",
  "updated": "2021-07-27T07:52:55.205-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When the line-height value is set to "normal" the line-spacing enactor will assume that the line-height is 1.2. However, this isn't universally true and is dependent on the font family. 

See: <https://developer.mozilla.org/en-US/docs/Web/CSS/line-height>

One particular issue that can be seen in the [uiOptions demo](https://build-infusion.fluidproject.org/demos/uioptions/) is that as that the line-space is increased fro 1 to 1.1, the line-heigh actually decreases. The preference setting is intended to be a multiplier. However, because the base value (1.2) is incorrect, the new value is smaller than what the "normal" line-height actually corresponds to. However, if you were to first change the text-style preference to "Arial" and then changed the line-height, you'd see it increase correctly. 

Some further discussion about how to detect the actual line-height: <https://stackoverflow.com/a/4515470>

        