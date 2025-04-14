---json
{
  "title": "FLUID-6314",
  "summary": "ModelTransformationTransforms.js binds to the wrong version namespace of Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-08-07T09:42:10.145-0400",
  "updated": "2024-07-22T08:57:17.456-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-08-20T15:43:20.881-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/922) has been merged into the project repo master branch at db4f4fb1fb06df0003e11fc90b237e54fb310841.\n"
    }
  ]
}
---
ModelTransformationTransforms.js binds to the FLUID\_2\_0\_0 namespace instead of FLUID\_3\_0\_0. 

<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L15-L16>

        