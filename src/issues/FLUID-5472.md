---json
{
  "title": "FLUID-5472",
  "summary": "The inversion of fluid.transforms.valueMapper inverts true/false to strings rather than booleans",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-07-15T12:52:23.911-0400",
  "updated": "2014-10-23T13:39:55.375-0400",
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
      "author": "Cindy Li",
      "date": "2014-07-15T12:58:21.808-0400",
      "body": "Submitted a pull request to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/545>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-07-20T18:49:53.483-0400",
      "body": "Hi cindyli - this test case isn't valid, since when using the \"short form\" syntax for the valueMapper, it is assumed that the key values accepted as input are strings - as they always are in JSON structures. The framework will not automatically coerce the strings to other values since it could never expect that the string value wasn't intended. To use non-string values as input values, you need to use the long form of configuration which accepts an array of options, with the input values specified as \"inputValue\" - in your case&#x20;\n\ntransform: {\\\ntype: \"fluid.transforms.valueMapper\",\\\ninputPath: \"audio\",\\\noptions: \\[ {\\\n\"inputValue\": true,\\\n\"outputPath\": \"audio\",\\\n\"outputValue\": \"available\"\\\n},\\\n{\\\n\"inputValue\": false,\\\n\"outputPath\": \"audio\",\\\n\"outputValue\": \"unavailable\"\\\n}]\\\n}\n\nI've issued an updated pull request at <https://github.com/fluid-project/infusion/pull/550>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-10-23T13:39:51.942-0400",
      "body": "The pull request has been merged into the project repo @ d92b850ec325f432eea838849926a3107e3fe7d4\n"
    }
  ]
}
---
When a model with boolean values is tranformed and inverted back, boolean values are inverted to strings such as "true" or "false", rather than booleans. For example,

The expected model: \
{\
audio: true\
}

The actual inverted model: \
{\
audio: "true"\
};

        