---json
{
  "title": "FLUID-5357",
  "summary": "Allow transformation rules to default to inputPath of \"\" if neither input nor inputPath are specified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Antranig Basman",
  "date": "2014-05-02T15:19:42.766-0400",
  "updated": "2021-07-29T01:34:26.643-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5480/",
      "key": "FLUID-5480"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-09-28T07:31:24.347-0400",
      "body": "This should be implemented at least to the extent that the valueMapper example pasted on <https://fluidproject.atlassian.net/browse/FLUID-6179#icft=FLUID-6179> can function without the additional path specification - note that for a relay specification with valueMapper we need to write the following:\n\n```java\nsingleTransform: {\r\n            type: \"fluid.transforms.valueMapper\",\r\n            defaultInputPath: \"\", // required due to FLUID-6179 not yet resolved\r\n            match: [{\r\n                inputValue: null,\r\n                outputValue: \"{that}.options.icons.keyedOut\"\r\n            }],\r\n            noMatch: \"{that}.options.icons.keyedIn\"\r\n        }\n```\n"
    }
  ]
}
---
This appeared in some work on the metadata component discussed on IRC at <https://botbot.me/freenode/fluid-work/msg/14144056/> (2/5/14 at 1.07pm).\
It seems as if it would be helpful if there is no other specification of an input, to assume that inputPath: "" was meant.\
This would be very simple to implement but as usual with MT we need to think hard to ensure that this doesn't have any unexpected and unpleasant consequences in some scenario.

        