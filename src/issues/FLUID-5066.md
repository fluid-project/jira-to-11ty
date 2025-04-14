---json
{
  "title": "FLUID-5066",
  "summary": "UIO Integrators shouldn't have to edit Infusion's copy of html templates to add panels, css",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2013-06-25T13:34:12.118-0400",
  "updated": "2017-09-27T10:25:24.240-0400",
  "versions": [
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5052/",
      "key": "FLUID-5052",
      "summary": "UIO Integrators shouldn't have to edit Infusion's copy of the iFrame html to reference MyInfusion.js"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5061/",
      "key": "FLUID-5061",
      "summary": "Develope an \"auxiliary schema\" which containing the component specific settings for constructing instances of UIO/UIE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2013-06-25T13:36:43.077-0400",
      "body": "Note: In some browsers, the integrator could add the CSS link to their copy of FatPanelUIOptions.html, but this doesn't work in IE9, and still doesn't address the issue of conflicts.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:09:31.039-0400",
      "body": "This is still an issue, as decided during our pre-1.5 consideration\n"
    }
  ]
}
---
Currently, if an integrator of UIO wants to add and style panels (e.g. the Video Player), they need to create their own copy of FatPanelUIOptions.html (to add an \<li> for the panels) and FatPanelUIOptionsFrame.html (to add a link to a CSS file). This will not work in a scenario where there might be more than one 3rd party wanting to add panels, as they would conflict with each other.

        