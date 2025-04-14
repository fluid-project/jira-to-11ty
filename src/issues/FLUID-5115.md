---json
{
  "title": "FLUID-5115",
  "summary": "Update the model relay component to handle model transformations",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2013-08-15T11:06:21.540-0400",
  "updated": "2014-11-18T20:21:49.761-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Model Transformation System",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5114/",
      "key": "FLUID-5114",
      "summary": "Improve model relay component to interpret model transformation rules"
    },
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-4258/",
      "key": "FLUID-4258"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently the model relay does straight translations from an internal model path to an external model path.&#x20;

However the discovery tool displays the need to be able to do transformation from one model structure to another during this translation. For example, in the discovery tool the model for the highContrast panel is {enabled: true} which really corresponds to a shared model of&#x20;

{\
theme: "bw",\
links: true,\
inputsLarger: true,\
textFont: "arial"\
}

The modelRelay's rules block should actually take in model transformation instructions and perform these on outgoing and incoming (using the inverse rules) model updates.

see: \
<http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions>\
<http://wiki.fluidproject.org/display/docs/fluid.model.transformWithRules>

for the case of the one-to-many changes, look at the valueMapper

        