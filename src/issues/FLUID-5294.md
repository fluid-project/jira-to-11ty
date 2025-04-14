---json
{
  "title": "FLUID-5294",
  "summary": "Review ambiguous status of \"value\" and \"input\" which are both acceptable as input for a standardInputTransform",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-03-24T15:22:32.584-0400",
  "updated": "2017-08-03T12:07:13.054-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5293/",
      "key": "FLUID-5293"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2014-04-09T16:44:25.924-0400",
      "body": "As per the architecture meeting, Wednesday, April 9 (<http://piratepad.net/ep/pad/view/O84cznEesx/izpgCyDvgG>), it was decided that we should remove the 'value' alias and only allow 'input' and 'inputPath' to avoid any confusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-06-24T07:50:33.173-0400",
      "body": "Note that this also needs to be fixed for multiInputValueTransforms, e.g. linearScale currently fails to support \"inputPath\" but only accepts \"valuePath\"\n"
    }
  ]
}
---
<http://issues.fluidproject.org/browse/FLUID-5293> was caused by an ambiguity in the framework about the proper naming of the input of a standardInputTransform. Both "input" and "value" are acceptable for the value itself, but "valuePath" was not acceptable, even though it is issued in two places in the framework - \
i)  fluid.transforms.linearScale.invert,\
ii) fluid.singleTransformToFull

The fix for <https://fluidproject.atlassian.net/browse/FLUID-5293#icft=FLUID-5293> restored consistency by properly aliasing valuePath, but we should review whether we really want this ambiguity since it increases the complexity of tools which will parse and operate on model transformation documents. We should probably settle on one choice and eliminate the other.

        