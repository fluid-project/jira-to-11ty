---json
{
  "title": "FLUID-4921",
  "summary": "Improvements to ModelTransformations system to support full range of ChangeApplier request types",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-02-21T03:43:42.498-0500",
  "updated": "2014-03-03T12:26:02.037-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-03-19T15:43:01.959-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/270> merged into project repo at a653e4e05de4b5a99e5ea56a350524a9a7be1d64\n"
    }
  ]
}
---
When correcting the implementation of the UploaderCompatibilityTests, which make use of the Model Transformations system in order to convert historical options to a current form, it was found useful to expand the range of Model Transformations directives so that the full range of ChangeApplier events could be generated. In particular, to create a new expander type named

fluid.model.transform.delete  which is capable of removing values already accumulated into the target structure,\
as well as a "merge:true" directive which can be inserted into any expander type which participates in the "standardOutput" system to indicate that its results should be merged into the target structure rather than overlayed.

These two directives are largely useful for transformation of component options rather than general model transformations as seen in the GPII, since they are unlikely to be invertible.

However, an improvement was made in the overall algorithm which now ensures that EVERY element of an entire model transformation record is applied in increasing order of key length. This ensures that records, for example, of the form&#x20;

{\
"" : "",\
"thing: "thing"\
}

will be handled correctly despite the lack of ordering on keys of JSON structures.&#x20;

A bug was also discovered in DataBinding at this point which failed on a "merge into nothing" operation on a previously unexplored part of the model.

        