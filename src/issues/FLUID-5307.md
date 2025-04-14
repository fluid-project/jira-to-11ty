---json
{
  "title": "FLUID-5307",
  "summary": "Requirement for more power in mapping cases than can be provided by condition or valueMapper transformers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Cindy Li",
  "date": "2014-04-09T15:56:35.366-0400",
  "updated": "2015-06-17T10:30:26.096-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5479/",
      "key": "FLUID-5479",
      "summary": "Improve handling in valueMapper of matching on composite values"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5337/",
      "key": "FLUID-5337"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-04-10T14:25:18.282-0400",
      "body": "Bosmon\\\ncindyli - can you explain what function the inversion is meant to perform? That is, what sequence of UI actions should lead to the inversion being required\n\ncindyli\\\nBosmon: the three states of audio appear to be three radio buttons on the page. the selection on any of these radio buttons needs to be inverted so it's reflected on the source model. in the case 4 described in the jira, the \"unknown\" radio button is selected initially. If users don't make any change to radio buttons, this \"unknown\" should be inverted to whatever it was sourced from. If users make change to another state and re-select \"unknown\" again, this selection needs to be inverted back to the source of Case 3.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-10T14:47:54.656-0400",
      "body": "Thanks for this very interesting use case, cindy - this is something that the current model transformation system can't accommodate - that is, it is incapable of operating a \"pseudoinverse\" where a particular value (source) is associated with multiple values on the opposing side (target) but has one \"preferred inverse\" - and the desired behaviour of the system is to accept ANY of the associated target values if they occur, but if none of them do, to invert to the preferred value.\n\nIn the current system, you should use a standard transform for the forward direction, but for now implement a custom \"inverse operation\" using a raw ChangeListener that \"reads ahead\" into the target model to make a decision as to whether the value there should be changed. We will implement new machinery in both model transformations and model relay to make this automatic in future.\n\nMy current idea for a \"future framework sketch\" for automating this involves a new grade applied to a \"lens transform\" named \"fluid.pseudoInverse\" or so, which licences the model transformation framework to apply the workflow automatically that you will currently write by hand - that is, in finding a value in the target disagreeing with the \"principal inverse\", to first run it through the opposite leg of the transform to see if it results in a different source value before modifying it. This, in particular, will note the transform as being \"asymmetric\" since clearly this behaviour can only be operated in one direction.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-04-10T15:28:21.898-0400",
      "body": "Also, this is far too complex a case for the condition transform to handle. It can only make a 2-way choice based on a single boolean value. This needs to be dealt with by upgrades to the valueMapper transform.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-07-23T17:02:05.867-0400",
      "body": "This is now being handled by the work for <https://fluidproject.atlassian.net/browse/FLUID-5479#icft=FLUID-5479>\n"
    }
  ]
}
---
The use case that makes me feel being able to define the default output value on "fluid.transforms.condition" would be useful:

The input model: \
{\
audio: boolean,\
sound: boolean;\
noSoundHazard: boolean\
}

The desired transformations:

| **Case &#x20;** | **Input                                             &#x20;** | **Expected transformed output&#x20;** |
| --------------- | ------------------------------------------------------------ | ------------------------------------- |
| 1               | {audio: true, sound: true}                                   | {"audio": "available"}                |
| 2               | {audio: false, noSoundHazard: true}                          | {"audio": "unavailable"}              |
| 3               | {audio: true, sound: false}                                  | {"audio": "unknown"}                  |
| 4               | Other combinations                                           | {"audio": "unknown"}                  |

Note that case 3 and 4 are creating the same output value. The question is, at inversion, what this output value should be inverted to?

The expected behavior to invert when this transformation is used in the model relay:\
1\. If the output value comes from Case 3, always invert back to Case 3 input value;\
2\. If the output value comes from Case 4,\
(1) no change request on the output model: invert back to whatever the original input value of Case 4;\
(2) ever have a change request to this special value of {"audio": "unknow"}: invert back to the input value of Case 3.

Thoughts?

        