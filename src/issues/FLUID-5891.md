---json
{
  "title": "FLUID-5891",
  "summary": "Update the valuemapper to support new semantics",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Kasper Galschiot Markus",
  "reporter": "Kasper Galschiot Markus",
  "date": "2016-04-15T15:03:45.036-0400",
  "updated": "2024-07-22T10:35:30.081-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5300/",
      "key": "FLUID-5300",
      "summary": "fluid.transforms.valueMapper requires outputValue (or outputPath) being specified for the output object  "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5473/",
      "key": "FLUID-5473",
      "summary": "defaultOutputValue in valueMapper isn't applied in case of no match/ambiguous match"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5608/",
      "key": "FLUID-5608",
      "summary": "fluid.transforms.valueMapper does not support \"false\" literal target values"
    }
  ],
  "attachments": [],
  "comments": []
}
---
As can be seen from the notes here (<https://pad.gpii.net/mypads/?/mypads/group/technical-discussions-4g920a3/pad/view/valuemapper-transformer-fixup-5na2088>) , we will update the valueMapper to support the semantics described in the below. Most important is that the \`options\` block will be renamed to \`match\`, we will allow for a top-level \`noMatch\` key that will be used (if present) if nothing matches in the \`match\` directive. We will no longer support \`defaultInputValue\` and \`undefinedInputValue\`.

For full details on the new format, refer to these notes: <https://pad.gpii.net/mypads/?/mypads/group/technical-discussions-4g920a3/pad/view/valuemapper-transformer-fixup-5na2088> (and the documentation once this JIRA is complete)

An example of the format is given here:

```javascript
{
    type: "fluid.transforms.valueMapper",
    inputPath/input: <path of value to map against>,
    defaultOutputPath: <outputPath to use if none is provided at the match/noMatch level>,
    defaultOutputValue: <outputValue to use if none is provided at the match/noMatch level>,
    match: [{
        partialMatches: <If true, this will allowing matching the inputValue partially>,
        outputUndefinedValue: <If true, the outputValue will be `undefined` -- TRUMPS outputValue>,
        inputValue: <the value to match against>,
        outputValue: <value to output if inputValue is matched. If outputUndefinedValue is given, outputValue will not be used>,
        outputPath: <path to output to>
    }],
    noMatch: {
        outputUndefinedValue: <If true, the outputValue will be `undefined` -- TRUMPS outputValue>,
        outputValue: <value to output if inputValue is matched. If outputUndefinedValue is given, outputValue will not be used>,
        outputPath: <path to output to>
    }
};
```

        