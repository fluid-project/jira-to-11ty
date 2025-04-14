---json
{
  "title": "FLUID-5381",
  "summary": "Support the escaping of dots in object paths for mergePolicy",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-05-26T10:40:43.254-0400",
  "updated": "2018-06-07T09:56:46.897-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-05-27T12:06:55.974-0400",
      "body": "Submitted a pull request that adds a unit test to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/522>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-06-07T07:05:54.066-0400",
      "body": "See the mothballed PR for comments.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2018-06-07T09:56:46.889-0400",
      "body": "Given we didn't close the pull, this implies that we are interested in this functionality in general even if it won't be implemented in precisely the way requested. Keeping this open so we can continue to track it\n"
    }
  ]
}
---
In the case where one or more dots are presented in the original object paths, mergePolicy doesn't support the escaping of those dots. The example:

The variables of source objects to be merged. Note the dots in a path:

```java
var source1 = {
            a: {
                "b.c": [1, 2]
            }
        };

        var source2 = {
            a: {
                "b.c": [3, 4]
            }
        };
```

To escape the dots in the path, the merge policy is defined as:

```java
var mergePolicy = {
            "a.b\\.c": fluid.arrayConcatPolicy
        };
```

However, since the escaping in the mergePolicy is not yet supported, rather than returning this expected result:

```java
var expected = {
            a: {
                "b.c": [1, 2, 3, 4]
            }
        };
```

The path specified in the mergePolicy is ignored and the actual returned value is the variable of source2.

        