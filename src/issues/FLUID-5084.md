---json
{
  "title": "FLUID-5084",
  "summary": "Improvements to linear scaling transform and transform namespacing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Antranig Basman",
  "date": "2013-07-06T03:11:48.558-0400",
  "updated": "2014-03-03T11:48:00.838-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-09-14T18:05:03.665-0400",
      "body": "Fixed with <https://github.com/fluid-project/infusion/pull/383>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:47:57.287-0500",
      "body": "The pull request ( <https://github.com/fluid-project/infusion/pull/383> ) was merged into the project repo at 9f9ab10f1dc8cd52ffbd99555d758dbd56cf65dd&#x20;\n"
    }
  ]
}
---
Hi there kasper - after committing the big model transformation branch I noticed a few issues with implementation that I failed to spot during review, in particular with the transform called "fluid.model.transform.scaleValue". I think a better name for this would be "linearScale" since there are any number of ways of scaling a value. Also could you please supply an inverse configuration for this transform.

Also - what do you think about the idea of putting all of the actual transforms in a dedicated namespace, for example "fluid.transforms.x"? People will be writing these increasingly often and it would be nice to have them all in once place so they are easily identifiable amongst all the other junk in fluid.model.transform (which can stay where it is), as well as a somewhat shorter overall namespace.

        