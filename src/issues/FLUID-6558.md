---json
{
  "title": "FLUID-6558",
  "summary": "Error when notifying relay rule during onDestroy",
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
  "date": "2020-10-21T08:43:19.918-0400",
  "updated": "2021-06-21T11:29:55.325-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6558/relay-during-onDestroy.png",
      "filename": "relay-during-onDestroy.png"
    }
  ],
  "comments": []
}
---
A case was encountered in the SJRK project where a relayed update resulting from a change triggered during an onDestroy listener received a bare exception.

The setup is as follows - a parent "sjrk.storyTelling.blockUi.editor.withFileUploader" contains a "singleFileUploader" as follows:

```java
fluid.defaults("sjrk.storyTelling.blockUi.editor.withFileUploader", {
        gradeNames: ["sjrk.storyTelling.blockUi.editor"],
....
        components: {
            // handles uploading a single file for storage
            singleFileUploader: {
                type: "sjrk.storyTelling.block.singleFileUploader",
```

where the uploader attempts to reset a piece of model state during onDestroy:

```java
fluid.defaults("sjrk.storyTelling.block.singleFileUploader", {
        gradeNames: ["fluid.viewComponent"],
....
            "onDestroy.resetUploadState": {
                changePath: "uploadState",
                value: "ready"
            }
```

The total count of these states is relayed up the tree by the means of the following distribution:

```java
fluid.defaults("sjrk.storyTelling.base.page.storyEdit", {
        gradeNames: ["sjrk.storyTelling.base.page"],
        distributeOptions: {
            "editor.uploadStateToCounters": {
                target: "{that editor singleFileUploader}.options.modelListeners",
                record: {
                    "uploadState": {
                        func: "{storyEdit}.updateUploadCounters",
                        args: ["{change}.oldValue", "{change}.value"],
                        namespace: "uploadStateToCounters"
                    }
                }
            }
        },
```

Instead, during standard teardown of the entire component tree at the end of an IoC testing fixture, the user receives a bare exception as shown in the attached picture.

This code has been checked in to <https://github.com/jobara/sjrk-story-telling/tree/SJRK-289-onDestroy/src> and the state shown can be seen in a standard test run.

Whilst the intention of the "middle-era" framework was for the component tree to be "nulled" at the point of destruction, so that it can no longer have side effects, this is clearly a legitimate use case that can't currently be covered by other means.

Whilst we have an intention to eliminate the use of lifecycle events such as "onCreate/onDestroy", there is currently not a replacement modelRelay definition style that is capable of integrating up model state as required. Rather than the individual update listener options distribution as shown above, there should be a new modelRelay syntax that allows an entire class of model state to be directly addressed via IoCSS syntax.

We should ensure that all relay definitions continue to function during teardown by reordering the operations in instantiator.clearComponent.

        