---json
{
  "title": "FLUID-5512",
  "summary": "Allow valueMapper to handle the defaultOutputValue when the transformation is based upon compound input values",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-09-19T15:59:30.068-0400",
  "updated": "2017-09-26T10:49:39.553-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5473/",
      "key": "FLUID-5473",
      "summary": "defaultOutputValue in valueMapper isn't applied in case of no match/ambiguous match"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-09-19T16:12:16.510-0400",
      "body": "Issued a pull request (<https://github.com/fluid-project/infusion/pull/561>) with a unit test to demonstrate this issue.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-09-22T16:33:40.982-0400",
      "body": "The work round for handling cases that the source model values are booleans is to use a combination of \"fluid.transforms.condition\" and \"fluid.transforms.binaryOp\":&#x20;\n\n```javascript\ntype: \"fluid.transforms.condition\",\r\n                condition: {\r\n                    transform: {\r\n                        type: \"fluid.transforms.binaryOp\",\r\n                        leftPath: \"inTransit.bothOpen\",\r\n                        rightPath: \"isShareTarget\",\r\n                        operator: \"&&\"\r\n                    }\r\n                },\r\n                \"true\": true,\r\n                \"false\": false\n```\n\nThe shortcoming of the work around is,\n\n1\\. Only applicable for boolean source values;\\\n2\\. \"fluid.transforms.condition\" is not invertible and cannot be used for model relay that requires inversion;\\\n3\\. When there are more conditions checking input value combinations, the transform options in the work around would be nested and complicated.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-11-18T15:17:36.206-0500",
      "body": "This behaviour is by the design of the valueMapper - if any branch matches even partially, this is considered a better match than \"no match at all\" which triggers the default case. It appears that your case could be handled by the alternative definition&#x20;\n\n```java\n{ \r\n    type: \"fluid.transforms.valueMapper\", \r\n    inputPath: \"\", \r\n    defaultOutputValue: false, \r\n    options: [{ \r\n        inputValue: { \r\n            \"isTooltipOpen\": true \r\n        }, \r\n        outputValue: true, \r\n    }, { \r\n        inputValue: { \r\n            \"isDialogOpen\": true \r\n        }, \r\n        outputValue: true, \r\n    }] \r\n};\n```\n\nWould this work for your case? If not, could you describe the wider problem that leads to it and what behaviour it requires?\n\nThanks\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-11-18T15:57:42.160-0500",
      "body": "I understand your design goal of \"better than nothing\". However, this use case is on the picky side with an attempt to match on the exact compound value, otherwise the default output value is expected to be returned.\n\nI tried the alternative approach, the result is, in case 2 & 3 (<https://github.com/cindyli/infusion/blob/FLUID-5512/tests/framework-tests/core/js/ModelTransformationTests.js#L1679-L1696>) where either \"isTooltipOpen\" or \"isDialogOpen\" has a true value, the returned result is {value: true}. In other cases, an empty object is returned, even with the case 1 where both \"isTooltipOpen\" and \"isDialogOpen\" have true values.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-11-18T16:05:36.063-0500",
      "body": "Ok, in that case I suggest the following representation, and avoid the use of the \"defaultValue\" infrastructure entirely:\n\n```java\n{ \r\n    type: \"fluid.transforms.valueMapper\", \r\n    inputPath: \"\", \r\n    options: [{ \r\n        inputValue: { \r\n            \"isTooltipOpen\": true, \r\n            \"isDialogOpen\": true \r\n        }, \r\n        outputValue: true, \r\n    }, { \r\n        inputValue: { \r\n            \"isTooltipOpen\": false\r\n        }, \r\n        outputValue: false,\r\n    }, { \r\n        inputValue: { \r\n            \"isDialogOpen\": false\r\n        }, \r\n        outputValue: false, \r\n    }] \r\n};\n```\n\ndo you think this will meet the case?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-11-18T16:23:29.740-0500",
      "body": "This approach looks really promising, except we may have found a real bug in valueMapper. My test report:\n\n1\\. Using the rule in your suggestion:\\\nResult: Case 1, 5 pass. Case 2, 3, 4 return empty objects\n\n2\\. I altered the rule a bit to retry your previous suggestion by removing the first option block:\n\n```java\n{\r\n    type: \"fluid.transforms.valueMapper\",\r\n    inputPath: \"\",\r\n    options: [{\r\n        inputValue: {\r\n            \"isTooltipOpen\": false\r\n        },\r\n        outputValue: false,\r\n    }, {\r\n        inputValue: {\r\n            \"isDialogOpen\": false\r\n        },\r\n        outputValue: false,\r\n    }]\r\n}\n```\n\nResult: Case 2, 3, 5, pass. Case 1, 4 return empty objects.\n\nIt seems having the same key checked by multiple option blocks confuses valueMapper.&#x20;\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-11-19T09:09:59.202-0500",
      "body": "Antranig issued a pull request: <https://github.com/fluid-project/infusion/pull/572>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-12-11T14:57:58.931-0500",
      "body": "Recall again that the meaning of \"defaultOutputValue\" is not \"the output in case no case matches\" but \"the outputValue that should be used in a case where it has not been explicitly written\". It looks like this option remains confusing (see <https://fluidproject.atlassian.net/browse/FLUID-5473#icft=FLUID-5473> for another issue in which it wasn't helpful) and it would be nice to withdraw it in favour automatically applying the new-style \"funky partial nothing block\" that appears in the pull request for this issue -&#x20;\n\n{ // a \"match always\" rule - this has the effect which is frequently imagined for \"defaultOutputValue: false\"\\\nundefinedInputValue: true,\\\npartialMatches: true,\\\noutputValue: false\\\n}\n\nhowever this would presumably mean withdrawing \"defaultInputValue\" (although perhaps not necessarily?) which would be quite a disruptive change. Note that there are no transforms within the GPII which make use of defaultOutputValue. Remember notes on the valueMapper at <http://wiki.fluidproject.org/display/fluid/Notes+on+valueMapper+Requirements>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-01-19T10:01:28.980-0500",
      "body": "Merged into the master branch of the project repo @ c860fe56239a70aa057532426a36457af11279e3\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-10-26T09:23:13.513-0400",
      "body": "Antranig Basman Cindy Li: I think this is covered by my valuemapper overhaul: <https://github.com/fluid-project/infusion/pull/710> ... if you agree, this can be closed\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-09-26T10:49:39.553-0400",
      "body": "Antranig Basman and Cindy Li can this be closed?\n"
    }
  ]
}
---
When valueMapper is used to transform compound input values, "defaultOutputValue" is not properly handled.

Example:

```javascript
var rules = {
    type: "fluid.transforms.valueMapper",
    inputPath: "",
    defaultOutputValue: false,
    options: [{
        inputValue: {
            "isTooltipOpen": true,
            "isDialogOpen": true
        },
        outputValue: true,
    }]
};
```

In cases that the input value is NOT&#x20;

```javascript
{
    "isTooltipOpen": true,
    "isDialogOpen": true
}
```

We expect the output value is false.&#x20;

However, what happens is, the output value is always true regardless of value combinations of "isTooltipOpen" + "isDialogOpen".

        