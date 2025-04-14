---json
{
  "title": "FLUID-5663",
  "summary": "Malformed compact listeners don't always raise errors",
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
  "reporter": "Colin Clark",
  "date": "2015-05-11T20:25:28.989-0400",
  "updated": "2016-07-08T08:46:18.330-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Using the compact listener syntax, some cases of malformed expressions don't cause an error to be reported.

For example, I had an invalid listener expression like this:

```java
listeners: {
        onReady: [
            "aconite.animator.setStageColor({glRenderer}.gl),    {animator}.options.stageBackgroundColor",
        ]
    }
```

I had added a second argument to the listener, but accidentally placed it after the closing round "invocation bracket." The code ran without error or warning, and when my listener was invoked it was provided with only the first argument.

Presumably the framework should raise an error if the closing bracket isn't the last character in the compact listener.

        