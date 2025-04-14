---json
{
  "title": "FLUID-4317",
  "summary": "Full-page versions of UIOptions don't use their own templates by default",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Anastasia Cheetham",
  "date": "2011-06-30T14:32:13.176-0400",
  "updated": "2011-07-25T10:22:07.514-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-07-25T10:21:55.961-0400",
      "body": "The pull request is merged into project repo at 6d6c5ddc4ac62499c026c9d61430459eb73d2e94\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-07-25T10:22:07.513-0400",
      "body": "Closed\n"
    }
  ]
}
---
UIOptions uses the fat-panel template by default. The two full-page flavours do not actually override this default to specify their own required templates themselves - it falls upon the integrator to do it. The full-page versions should have a demands block that specifies the correct template.

This **will** require that integrators specify **all** filenames (and replicate anything else that's in the demands block) if they wish to override **any** of them (since demands blocks don't merge, they replace), but this is an overriding problem with demands blocks in general - not specific to UIOptions.

        