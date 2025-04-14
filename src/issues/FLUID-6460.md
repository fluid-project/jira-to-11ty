---json
{
  "title": "FLUID-6460",
  "summary": "Incorrect quoting when transferring resource loader options to XHR",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2020-02-28T13:39:56.175-0500",
  "updated": "2021-06-21T11:36:53.260-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
This bug only affects the in-progress FLUID-6148 branch. As a part of the refactoring removing jQuery AJAX from the ResourceLoader's dependencies, a branch was added to allow those few peculiar options which must be applied directly as properties to the raw XHR object ("contentType", "responseType", "timeout") rather than supplied as options to be passed through from the resource's options.

Unfortunately these were quoted incorrectly in the following implementation resulting in nothing being transferred:

```java
fluid.resourceLoader.loaders.XHR.copyProps.forEach(function (prop) {
            if (fluid.isValue(options.prop)) {
                xhr[prop] = options.prop;
            }
        });
```

We should quote these correctly and add at least some "white-box" tests for this.

        