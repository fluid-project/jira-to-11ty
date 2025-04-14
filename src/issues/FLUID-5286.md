---json
{
  "title": "FLUID-5286",
  "summary": "Improve parsing of model references in \"change\" records to support arrays of path segments and \"broken-out\" records",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2014-03-11T16:49:30.840-0400",
  "updated": "2016-08-18T11:39:20.619-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Data Binder",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-08-18T11:39:06.915-0400",
      "body": "This was resolved with the merge of <https://github.com/fluid-project/infusion/pull/671> for <https://fluidproject.atlassian.net/browse/FLUID-5586#icft=FLUID-5586>, <https://fluidproject.atlassian.net/browse/FLUID-5695#icft=FLUID-5695> etc.\n"
    }
  ]
}
---
The "currency converter" sample at <http://wiki.fluidproject.org/display/docs/Evented+Components> could be written with one less coded invoker if it were possible to specify IoC-resolved arrays of path segments as parts of "changePath" records - for example, we could have written the invoker definition for "updateRate" as

```java
updateRate: {
    changePath: ["rates", "{arguments}.0"],
    value: "{arguments}.1"
    }
```

this would be rather easy to implement and quite helpful. Currently changePath must be a string which is interpreted by fluid.parseValidModelReference.

We should take the opportunity to support some kind of top-level option such as "targetModel" so that we can easily express references to foreign components without some kind of painful ambiguity in the interpretation of the first path segment.

        