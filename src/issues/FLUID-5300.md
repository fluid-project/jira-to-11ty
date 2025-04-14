---json
{
  "title": "FLUID-5300",
  "summary": "fluid.transforms.valueMapper requires outputValue (or outputPath) being specified for the output object  ",
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
  "reporter": "Cindy Li",
  "date": "2014-04-02T15:05:07.516-0400",
  "updated": "2024-07-22T10:35:01.724-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5891/",
      "key": "FLUID-5891"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-04-15T12:01:10.399-0400",
      "body": "Two changes have altered the terrain around this issue since it was filed - \\\ni) <https://fluidproject.atlassian.net/browse/FLUID-5867#icft=FLUID-5867> altered the default framework behaviour on encountering nested transforms to be consistent with this behaviour\\\nii) We supported the \"literalValue\": \"x\" syntax to more compactly encode literal values\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-04-15T12:04:42.185-0400",
      "body": "With these changes, cindy's transform becomes&#x20;\n\n```javascript\n{\r\n    type: \"fluid.transforms.valueMapper\",\r\n    inputPath: \"hazard\",\r\n    options: {\r\n        \"flashing\": {\r\n            \"outputValue\": {\r\n                \"hasHazard\": true\r\n                \"sound\": true\r\n            }\r\n        }\r\n    }\r\n};\n```\n\nwhich I think is pretty reasonable\n"
    }
  ]
}
---
When a literal value needs to be mapped to an object that has multiple paths and values, for example:

```java
var inputModel = {
    hazard: "flashing"
};

var expectedTransformedObject = {
    hasHazard: true,
    audio: true
};
```

The transformation rule that performs this transformation successfully looks like:

```java
{
    type: "fluid.transforms.valueMapper",
    inputPath: "hazard",
    options: {
        "flashing": {
            "outputValue": {
                transform: [{
                    type: "fluid.transforms.literalValue",
                    value: true,
                    outputPath: "hasHazard"
                }, {
                    type: "fluid.transforms.literalValue",
                    value: true,
                    outputPath: "sound"
                }]
            }
        }
    }
};
```

Note that in this rule:\
1\. "outputValue" needs to be specified as a key in the map options;\
2\. Nested transformation rules needs to be defined for each output key value pair rather than a direct compound values.

It would be nice to simplify the rule to be:&#x20;

```java
{
    type: "fluid.transforms.valueMapper",
    inputPath: "hazard",
    options: {
        "flashing": {
            "hasHazard": true,
            "sound": true
        }
    }
}
```

In today's conversation at irc channel, Antranig expressed concerns that the implementation of the valueMapper is not consistent with that of our other transforms:&#x20;

<https://botbot.me/freenode/fluid-work/2014-04-02/?tz=America/Havana>

at 11:19AM onwards.

        