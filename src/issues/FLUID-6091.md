---json
{
  "title": "FLUID-6091",
  "summary": "Compact syntax expands empty argument list to the number 0",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-12-04T22:40:03.514-0500",
  "updated": "2017-01-06T14:23:57.223-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-01-06T14:23:53.531-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/794> has been merged into the project repo master branch at c152ca46b197d46fdfe1fca7979d981f9dace78b\n"
    }
  ]
}
---
Use of the compact syntax for an invoker (or expander) with empty argument list, for example:

```java
invokers: {
            pullModel: "fluid.identity()"
        }
```

actually produces the argument list consisting of the single number 0

        