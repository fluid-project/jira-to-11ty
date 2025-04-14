---json
{
  "title": "FLUID-5083",
  "summary": "Improve Model Transformation system as required by GPII pilots and suggested by San Diego discussions",
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
  "date": "2013-07-05T01:38:12.020-0400",
  "updated": "2014-03-03T11:48:24.529-0500",
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
      "author": "Antranig Basman",
      "date": "2013-07-05T02:40:02.479-0400",
      "body": "Merged into trunk at revision a27619d - thanks for all this long work, KASPARNET!&#x20;\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2013-07-05T03:34:22.914-0400",
      "body": "Thanks for writing this up Antranig - and sorry for not doing it myself\n"
    }
  ]
}
---
The Model Transformation system is starting to receive serious and widespread use as part of the GPII infrastructure describing the mapping between user preference sets and solution capabilities, as well as upcoming in the "ontology manager". The work for the GPII pilots this spring/summer has led to a number of engineering improvements, comprised under this JIRA. These include:

Several new transforms, such as "arrayToObject", "arrayToObject" and their inverses, as well as a host of smaller functions representing common mathematical operations. Our set of transforms has expanded so much that it is best spun off to a separate file, "ModelTransformationTransforms.js", as well as an accompanying rename of the base file to the singular "ModelTransformation.js". There have also been improvements in regularising the action of transforms which accept and return multiple values, under the base grade "fluid.multiInputTransformFunction".

Available transformations are documented at <http://wiki.gpii.net/index.php/Architecture_-_Available_transformation_functions>

        