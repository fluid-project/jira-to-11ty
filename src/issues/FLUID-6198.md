---json
{
  "title": "FLUID-6198",
  "summary": "Migrate multilingual UIO code from SJRK Storytelling to Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Gregor Moss",
  "reporter": "Alan Harnum",
  "date": "2017-09-19T09:54:46.403-0400",
  "updated": "2018-07-17T16:53:20.118-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-113/",
      "key": "SJRK-113",
      "summary": "Review and/or migrate multilingual UIO implementation"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6299/",
      "key": "FLUID-6299"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6300/",
      "key": "FLUID-6300"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6301/",
      "key": "FLUID-6301"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303"
    }
  ],
  "attachments": [],
  "comments": []
}
---
**Updated description 2018-07-17:**

The work @@Gregor Moss and @@Michelle D'Souza have done in SJRK-90 (<https://issues.fluidproject.org/browse/SJRK-90>) has extended from this work, and will form the core of a PR to Infusion. Retaining the original description below for informational purposes.

—

The UIO multilingual spike at <https://github.com/waharnum/uio-multilingual> would be useful to review and have in the core Infusion demos or examples.

It is probably most appropriate to have it in <https://github.com/fluid-project/infusion/tree/0ca2eac0a06731f99588399c9abd3e9d29732235/examples/framework/preferences,> as it is an example of how to implement some multilingual features atop a core component rather than a demo of the core component itself.

This also is an opportunity to assess whether or not any of the features in the spike should be in Infusion core, such as the decoration of components with lang and dir attributes.

        