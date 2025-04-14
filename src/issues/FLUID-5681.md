---json
{
  "title": "FLUID-5681",
  "summary": "Input groups should be semantically grouped",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Kaye Mao",
  "date": "2015-06-09T14:03:11.991-0400",
  "updated": "2015-06-26T10:08:34.412-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5417/",
      "key": "FLUID-5417",
      "summary": "Little contextual information provided for checkboxes and radio buttons used in adjuster panels"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:11.625-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
* Use \<fieldset> to group related inputs, such as a slider and its text input equivalent, and provide a caption for it with \<legend> to describe the group.
* explain the relationship between the slider and the text input by adding aria-controls to the slider and setting it to be the id of the input it controls. E.g. text size slider, slider to text input

        