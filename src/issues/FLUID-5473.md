---json
{
  "title": "FLUID-5473",
  "summary": "defaultOutputValue in valueMapper isn't applied in case of no match/ambiguous match",
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
  "reporter": "Cindy Li",
  "date": "2014-07-15T14:06:46.849-0400",
  "updated": "2016-09-22T22:36:59.912-0400",
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
      "url": "/browse/FLUID-5512/",
      "key": "FLUID-5512"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5891/",
      "key": "FLUID-5891"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-07-15T14:10:29.120-0400",
      "body": "Submitted a pull request with an unit test to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/546>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-07-20T19:18:48.674-0400",
      "body": "Hi cindyli - this is I think a reasonable expectation for the semantic of the valueMapper, but it is not the one which was implemented. I have issued a pull request with a fix at <https://github.com/fluid-project/infusion/pull/551> - this did not involve breaking any existing tests for the valueMapper, but we do need to have a discussion on whether this change in semantic is viable, as well as verify whether it breaks any transformations that have so far been written in the GPII.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2014-07-23T16:57:44.841-0400",
      "body": "This is now looking like a hazardous change - see discussion at <http://wiki.fluidproject.org/display/fluid/Notes+on+valueMapper+Requirements>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-08-04T14:48:43.904-0400",
      "body": "The new \"noMatch\" block introduced by <https://issues.fluidproject.org/browse/FLUID-5891> in <https://github.com/fluid-project/infusion/pull/710/files> is a much clearer scheme for dealing with this kind of problem\n"
    },
    {
      "author": "Kasper Galschiot Markus",
      "date": "2016-09-13T03:39:49.505-0400",
      "body": "@@Antranig Basman Given the pull/710 merge, do you think this can be closed?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-09-22T22:36:59.908-0400",
      "body": "Closed through fix of <https://fluidproject.atlassian.net/browse/FLUID-5891#icft=FLUID-5891>\n"
    }
  ]
}
---
This use case requires the transformed result to be determined by multiple model values:

Scenario 1:

```java
model = {
    flashing: true,
    noflashing: false
};

expected = {
    flashing: "flashing"
}
```

Scenario 2:

```java
model = {
    flashing: false,
    noflashing: true
};

expected = {
    flashing: "noflashing"
}
```

Scenario 3: In the case of other model value combinations,

```java
expected = {
    flashing: "flashing"
}
```

So, the transformation rule is,

```java
{
    type: "fluid.transforms.valueMapper",
    defaultOutputPath: "flashing",
    defaultOutputValue: "unknown",
    options: [
        {
            inputPath: "flashing",
            inputValue: true,
            outputValue: "flashing"
        },
        {
            inputPath: "noflashing",
            inputValue: true,
            outputValue: "noflashing"
        }
    ]
}
```

Scenario 1 & 2 are transformed successfully, but scenario 3 outputs an empty object rather than the expected.

        