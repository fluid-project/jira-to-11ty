---json
{
  "title": "FLUID-4302",
  "summary": "Framework usability issue: situation with ambiguously named component and DOM binder was hard to diagnose",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Antranig Basman",
  "date": "2011-06-23T17:51:37.321-0400",
  "updated": "2019-11-22T07:30:22.793-0500",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-06-09T20:05:10.656-0400",
      "body": "There's been no further feedback on this issue and this area of the framework has changed so much in 4 years that we are unlikely to reproduce it in the same form. Especially, attempting to bind a \"container\" onto a \"selector\" is a terrible hack that should never be necessary/effective.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:07.265-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The following revision of ErrorsView\.js (now outdated) shows a construct that was led to confusion:

<https://github.com/jhung/infusion/blob/9e8ae1fb32dac30a0c0170676a3cc343fca994b5/src/webapp/components/uploader/js/ErrorsView.js>

```java
fluid.demands("fluid.uploader.errorsView", "fluid.uploader.multiFileUploader", {
        container: "{multiFileUploader}.options.selectors.errorsPanel", // TODO: Why can't I bind to {multiFileUploader}.dom.errors?
        options: {            
            listeners: {
                "{multiFileUploader}.events.afterFileDialog": "{errorsView}.refreshView"
            }
        }
    });
```

Due to ambiguous resolution of "errorsView" this quietly caused a binding of the listener onto the wrong target. \[This doesn't match what I remember of the original problem but is the only possible problem I can see right now - Colin, can you add details?]

        