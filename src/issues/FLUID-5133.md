---json
{
  "title": "FLUID-5133",
  "summary": "Implement the inverters/inverse for all existing model transforms and ensure the framework supports invertibility",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2013-09-14T17:51:57.027-0400",
  "updated": "2024-07-22T10:35:09.011-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5905/",
      "key": "FLUID-5905",
      "summary": "Implement inverse for inRange and quantize"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5889/",
      "key": "FLUID-5889",
      "summary": "Framework support for nested inversions for standard functions"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5337/",
      "key": "FLUID-5337",
      "summary": "Improve model relay and model transformation system to operate \"pseudoinverse\" rules"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:43:36.279-0400",
      "body": "@@Kasper Galschiot Markus has this been completed?\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2015-06-15T12:31:11.521-0400",
      "body": "Nope - this is not done yet, and it will not be finalized in the context of C4A at least... We might be able to make some improvements, but it is a long term thing (requiring 'pockets' and other complex additions to properly support invertibility.\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-04-13T08:59:30.619-0400",
      "body": "## Done but needs documentation:\n\n* fluid.transforms.literalValue: FULLY INVERTIBLE. (the literal value is always independent of the input model, so that will always be left alone).\n* fluid.transforms.value: PARTLY invertable - the 'input' default values are ignored.\n* fluid.transforms.arrayValue: NO INVERSION. Since there is no way of telling whether the value was an array or primitive value before.\n* fluid.transforms.numberToString and fluid.transforms.stringToNumber: PARTLY invertable - suffers from standardTransformFunction issues. Also, if the input is not a valid number (or numberstring), the inversion will be lacky.\n* fluid.transforms.count: NO INVERSION - no way to reproduce the thing we're counting based on knowing the number of entries\n* fluid.transforms.round: LACKY inversion - inverts to identity, since we cannot reproduce the decimal portion of the number based on a decimal. In other words, the decimal precision can not be restored on inversion. Also, suffers from standardTransformFunction issues.\n* fluid.transforms.delete: NO INVERSION - no way to reproduce a deleted element from scratch\n* fluid.transforms.firstValue: NO INVERSION - no way to reproduce an array based on the first element\n* fluid.transforms.linearScale: PARTLY invertible. If \\`factor\\` or \\`offset\\` are given as paths into the source model (and no default value is provided), we have no way of knowing what they were. Also, if no inputPath is given, we have nowhere to write the inverted result\n* fluid.transforms.binaryOp: NO Inversion: Since we have no way to reproduce the operands based on a result and an operator\n* fluid.transforms.condition: NO Inversion. There is really no half-easy way to know what the original input value was\n* fluid.transforms.arrayToSetMembership and fluid.transforms.setMembershipToArray: Invertable (though with the regular standardTransformFunctions issues). These two will invert to one another.\n* fluid.transforms.arrayToObject and fluid.transforms.objectToArray: Partly Invertable - the two will invert to each other - but there is no guarantee the ordering of the array will be the same on the objectToArray side of things. Also, if the innerValues has lossy transforms, this will obviously affect the overall invertibility.\n* fluid.transforms.indexOf && fluid.transforms.dereference: Inverses of each other. Unable to do proper inversion when \"notFound\" is provided (and used)\n* fluid.transforms.stringTemplate: NOT invertible\n* fluid.transforms.free: NOT invertible\n* fluid.transforms.valueMapper - partly invertible\n* fluid.transforms.quantize - NOT implemented yet:  <https://fluidproject.atlassian.net/browse/FLUID-5905#icft=FLUID-5905>\n* fluid.transforms.inRange - NOT impleented yet:  <https://fluidproject.atlassian.net/browse/FLUID-5905#icft=FLUID-5905>\n"
    }
  ]
}
---
Currently not all transformations have inverse functions, and it is not certain how well invertibility is supported in the model transformation framework. This needs to be fixed as it's a requirement by the GPII project

        