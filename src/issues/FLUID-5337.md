---json
{
  "title": "FLUID-5337",
  "summary": "Improve model relay and model transformation system to operate \"pseudoinverse\" rules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-04-28T15:13:04.507-0400",
  "updated": "2021-07-29T01:34:35.066-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Data Binder",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5905/",
      "key": "FLUID-5905"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5307/",
      "key": "FLUID-5307",
      "summary": "Requirement for more power in mapping cases than can be provided by condition or valueMapper transformers"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5133/",
      "key": "FLUID-5133"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-07-23T17:02:23.794-0400",
      "body": "New suggested name - \"principal inverse\" system\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-05-10T10:12:20.691-0400",
      "body": "Some random notes from <https://pad.gpii.net/p/model-transformation-questions-apr-2016-7a72owa>\n\n* Fallback values for standardTransformFunction (ie. \"input\") are not invertable. If both input and inputPath are provided, we have no way of knowing from what the output value was calculated. On the other hand, if both (the original) input/inputPath are provided, one could argue that the following would hold:       &#x20;\n  * IF we can do the inverse transform with some confidence and get a sensible value out of it, write that to the original inputPath.\n  * ELSE use the value from \\`input\\` and print that out to \\`inputPath\\`. This would mean though, that we risk having a value at \\`inputPath\\` where we didn't have a value before.\n  * This looks like it is not unrelated to <https://fluidproject.atlassian.net/browse/FLUID-5337#icft=FLUID-5337>\n\n- For full inversion: So what is \"x\" in this case, is it *only* the values (inputPaths) relevant to the transform we're talking about, or is it anything – because if the latter, we will only be able to satisfy this condition if x *only* contains inputPaths used by A\n- In some cases we need to screw up the original model when inverting to be able to satisfy A(B(A:cross\\_mark:)) = A:cross\\_mark:, eg:\n  * linearScale:\n    * If it uses paths in the source model for scale and offset, we can invert, but it will be by setting the original input value path to a the result and not set scale and offset, which would be untrue to our original model\n      * Ignore this since we will abolish all use of paths before long\n  * count is the same case (but significantly more screwed up)&#x20;\n\n* Partly inversibility is great - but the question remains to what extent we allow polluting our input model... And what we consider \"acceptable pollution\" of it. (ie. addition of potentially non-existing key vs. not adding potentially existing keys, etc)\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-10-25T21:04:10.656-0400",
      "body": "No idea why the github hook randomly decided to resolve this issue based on a 5 yr old pull request\n"
    }
  ]
}
---
This was a requirement that was always envisaged for the Model Relay/MT system but it was unexpected that almost our very first application of the system to a real problem would end up requiring it. This requirement arose as part of the metadata panel work and is written up more fully in <https://fluidproject.atlassian.net/browse/FLUID-5307#icft=FLUID-5307>. Not all model transformation rules are completely invertible - sometimes multiple values on one side of the transform are associated with a single value on the other. In the case of a static, one-shot "model transformation" run, there's not much we can do about this since we have no ready access to a source of additional information that could disambiguate the inverse. However, when operating a constantly running model relay associated with the transformation rule (most likely, accompanied with a live updating UI showing the changing values), there is always a "current value" associated with both ends of the relay link. This can be used to improve the quality of inversion that we offer.

In order to gain access to this improved inversion quality, we need to make various upgrades throughout the pipeline. An author of a transformation rule needs to be able to specify that it participates in the "pseudoinverse" system, and commit to providing a "principal inverse" value when the link is operated in the noninvertible direction. Perhaps as a performance hint it might help if the transformation rule can somehow "out of band" report that the particular value is a "principal inverse" rather than a "perfect inverse". The MR/MT system when it finds such a value on one side of a link will leave it undisturbed if when running it back through the other leg of the link finds that it inverts to the same value. It will only make use of the "principal inverse" value in the case where the value on the other side of the link doesn't correspond to any of the possible values associated with it by the transformation rule. This would be much clearer with a diagram.

The principal transformation rule that could benefit from this immediately is the "valueMapper" which would need to be upgraded considerably - this kind of discussion is beginning to suggest that this rule will increasingly be seen as the "standard discrete transformation rule" in that it is capable of having any kind of mapping specified to it purely in terms of examples. "continuous" rules operating on numbers such as the linearScale mapper will continue to be the main alternatives - but these are typically "fully invertible" except in special cases.

        