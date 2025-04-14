---json
{
  "title": "FLUID-6510",
  "summary": "Add transformations for XOR and other missing binaryOps as well as negation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Steven Githens",
  "reporter": "Steven Githens",
  "date": "2020-05-29T12:20:12.986-0400",
  "updated": "2020-05-29T12:20:12.986-0400",
  "versions": [],
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
Currently in our model transforms we have support for a number of javascript binaryOps, but are missing some like \`&\` and \`|\`. These and any other missing ones should be added.

Additionally, we don't have any support for negation at the moment, such as would be used in a statement like:

if (!myVariable) { do stuff }

        