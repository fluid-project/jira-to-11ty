---json
{
  "title": "FLUID-6231",
  "summary": "Clarify / correctly document behaviour of fluid.promise.fireTransformEvent filterNamespaces option",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-11-28T13:55:57.529-0500",
  "updated": "2024-07-22T10:35:27.199-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-11-28T14:15:22.624-0500",
      "body": "Alan Harnum I agree that having both a whitelist and blacklist would be helpful. \n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-11-29T10:45:38.394-0500",
      "body": "PR opened: <https://github.com/fluid-project/infusion-docs/pull/131>\n"
    }
  ]
}
---
The "esoteric but powerful" fireTransformEvent function documented at <https://docs.fluidproject.org/infusion/development/PromisesAPI.html#fluidpromisefiretransformeventevent-payload-options> is indeed powerful, but possibly too esoteric in regards to the (optional) filterNameSpaces feature.

The documentation states as follows:

*filterNamespaces: {Array of String} A collection of event namespaces to be filtered out of the processing chain for this particular firing*

As written in the documentation, this sounds (to my ear at least) like a blacklist filter option that will remove ("filter out") any event namespaces that match from the chain.

By contrast, both the implementation and its in-code API documentation and the test make clear that this is a whitelist filter option, and removes all event namespaces that do not match the collection in the array:

* in-code API documentation: <https://github.com/fluid-project/infusion/blob/16a963d63dce313ab3f2e3a81c725c2cbef0af79/src/framework/core/js/FluidPromises.js#L252> "filterTransforms {Array}\
  : An array of listener namespaces. If this field is set, only the transform elements whose listener namespaces listed in this array will be applied."

- test: <https://github.com/fluid-project/infusion/blob/945866abdc737380ced3976ecbfea08085d3f17f/tests/framework-tests/core/js/FluidPromisesTests.js#L198>

We should correct the documentation; longer term, this probably needs a way to operate the chain with the option of both including or excluding event namespaces.

        