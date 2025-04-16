---json
{
  "title": "FLUID-5130",
  "summary": "Change standardinputtransformation and binary op transformer to properly handle undefined input",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Kasper Galschiot Markus",
  "date": "2013-09-10T08:36:41.311-0400",
  "updated": "2015-06-15T14:06:46.325-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2014-03-24T15:23:34.508-0400",
      "body": "I see the following code in current ModelTransformation.js line 254 which suggests this issue is resolved. Kasper, could you please review and close if you believe this is no longer an issue\n\n//if the function has no input, the result is considered undefined, and this is returned\\\nif (expanded === undefined) {\\\nreturn undefined;\\\n}\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:43:08.167-0400",
      "body": "Kasper Galschiot Markus Could you see if this issue has been resolved. See above comment from Antranig Basman\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-06-15T12:39:29.183-0400",
      "body": "This issue has been resolved in general in the commits:\\\n<https://github.com/fluid-project/infusion/commit/d5d87014a4cb4b0162e47686153083a533eebc29>\\\nand \\\n<https://github.com/fluid-project/infusion/commit/485173aeab137033c325ea924ff09b885a8526ee>\n"
    }
  ]
}
---
Currently StandardInputTransformations still attempt to run despite getting "undefined" as input value, instead it should result in 'undefined'.

Same for binaryOp. This requires valid values for each of the input variables, so in case one of the inputs is invalid (undefined), the transformation result should be undefined.

        