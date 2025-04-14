---json
{
  "title": "FLUID-6515",
  "summary": "Model transformation system should support collectOutputPaths strategy by analogy with collectInputPaths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-06-09T09:44:53.129-0400",
  "updated": "2020-06-09T09:44:53.129-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The model transformation system should support a "collectOutputPaths" option and corresponding "strategy", by analogy with the existing "collectInputPaths" strategy. This would collect all paths that might be written to by a transform in its output document. This use case arose through considering support for the GPII Capture Tool, as written up in comment <https://issues.gpii.net/browse/GPII-4497?focusedCommentId=44303#comment-44303> . This required a selected set of transformations (in fact the inverse transformations described in "inverseCapabilitiesTransformations" to run, which did not output to any common terms).

Note that as well as the strategy, analogous to fluid.model.transform.collectInputPaths, this will require some custom support within a few transforms, such as the valueMapper, for which the written paths can't be directly inferred.

        