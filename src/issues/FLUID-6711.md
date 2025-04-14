---json
{
  "title": "FLUID-6711",
  "summary": "Grab handle resolution has broken in Infusion 4 prerelease",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-02-03T04:42:06.057-0500",
  "updated": "2024-07-17T08:07:06.054-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Image Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:51:21.441-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
As part of the review for FLUID-6710 the resolution of grab handles was found to be broken for some Reorderer demos. \
<https://github.com/fluid-project/infusion/pull/1069#issuecomment-1028092059>

This seems to have happened as a result of the factoring off of the special "local container" variant of the DOM binder that is now used only in the Uploader's FileQueueView and the Reorderer fluid.createLocalContainerDomBinder .

The fix is in the special-case branch for an empty selector - should read

```java
if (selector === "") {
            togo = userJQuery(thisContainer);
        }
```

        