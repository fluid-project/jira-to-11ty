---json
{
  "title": "FLUID-6120",
  "summary": "fluid.transforms.limitRange is missing an inverse rule",
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
  "date": "2017-01-26T12:45:05.394-0500",
  "updated": "2017-01-30T09:20:39.089-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-01-30T09:20:33.422-0500",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/805> ) was merged into the project repo at 103de6e28c790b196364b8cb941ba77fd2880f34\n"
    }
  ]
}
---
fluid.transform.limitRange is missing the inverse rule. This should can be modelled after fluid.transforms.round's inverse ( <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L93> ). That is, it can return the back the current model value.

see channel conversation: <https://botbot.me/freenode/fluid-work/2017-01-26/?msg=79987172&page=1>

        