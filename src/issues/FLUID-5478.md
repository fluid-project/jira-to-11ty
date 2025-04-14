---json
{
  "title": "FLUID-5478",
  "summary": "\"arrayToObject\" and \"objectToArray\" transforms need better names and descriptions",
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
  "date": "2014-07-22T15:15:54.771-0400",
  "updated": "2024-07-22T10:35:09.980-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-04-14T13:10:15.790-0400",
      "body": "@@Antranig Basman Yeah - this is absolutely horrible naming... I think your suggestions above are pretty good... Only alternatives I can come up with are the below:\n\n* arrayOfObjectsToMapOfObjects (and vice versa)\n* arrayToObjectWithPivotElement (and objectToArrayWithPivotElement)\n\nI dont feel particularly strong either way (other than we would have a hard time finding a more misleading name than the current ones)\n\nI'm refactoring and documenting at the moment, so we should just pick the least terrible 🙂\n"
    }
  ]
}
---
The names "arrayToObject" and "objectToArray" for these two transforms in ModelTransformationTransforms.js are too generic and very confusing to people looking for transforms. They might imagine from the names that they simply convert objects to arrays etc. - that is, in the same way that fluid.transforms.arrayValue does. These need to be renamed with more descriptive names and an explanation added in the comments for what these transforms actually do.

I suggest names using words such as "index" or "pivot". What the forward transform ("arrayToObject") does, is given a key name into an array of objects, index that array by the values of that key, and eliminates that key and its value from the remaining objects. That is, it converts (array of objects) into (object of objects) by an indexing process. The inverse "deindexes" the material by extracting the nominated key back into its own field in an array element. It's worth mentioning that this inverse is extremely poor since the resulting array will be in an undefined order relative to the original one. It's also worth mentioning the context in which this transform arises, i.e. that of the XMLSettingsHandler in which data frequently appears in this "self-indexed array form".

Something like - indexArrayByKey and deindexIntoArrayByKey?

        