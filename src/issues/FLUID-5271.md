---json
{
  "title": "FLUID-5271",
  "summary": "Closures guarding model transformations files have improper argument lists",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-02-11T02:36:36.314-0500",
  "updated": "2014-03-03T11:23:39.406-0500",
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
      "date": "2014-02-11T12:46:04.085-0500",
      "body": "merged into project repo at d0d2e046f65d58bd63bbfcdc98aa99f8a40eac89\n"
    }
  ]
}
---
In debugging use of the framework with the uPortal team, it was discovered that the file closure structure of the files ModelTransformation.js and ModelTransformationTransforms.js is incorrect. The argument list at the base of the files is correct with

})(jQuery, fluid\_1\_5);

unfortunately the parameters declared at the head of the function contains only (function ($) { - this causes the "fluid" argument to be thrown onto the floor and the file contents resolve only via globals. This is a serious problem in the uPortal environment where both fluid and fluid\_1\_5 globals are aggressively assigned to null in order to ensure each portal may successfully load its own libraries.

        