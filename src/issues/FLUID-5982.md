---json
{
  "title": "FLUID-5982",
  "summary": "Allow injected subcomponent definitions to consist of expanders",
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
  "date": "2016-10-15T20:40:41.336-0400",
  "updated": "2016-10-20T09:59:08.810-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-10-20T09:59:01.267-0400",
      "body": "Merge PR ( <https://github.com/fluid-project/infusion/pull/764> ) into the project repo at de9be1200c491fed7d951298ad866de54ef7f7e7\n"
    }
  ]
}
---
An irregularity in our "configuration grammar" (if we had one) allows injected subcomponents to be represented by IoC references but not by expanders. This is one of the few places where we accept one but not the other. This appeared like an esoteric use case but in fact arose during the authoring work, where we wanted to write a definition like this:

```java
fluid.defaults("fluid.author.arrowForComponentView", {
        components: {
            sourceView: {
                expander: {
                    func: "{componentGraph}.idToView",
                    args: "{arrowForComponentView}.options.sourceId"
                }
            },
...
```

This allows us to avoid passing components wholesale as arguments - they are not serializable and therefore should not appear unannounced in configuration. In general we should make sure that when we fix <https://fluidproject.atlassian.net/browse/FLUID-5556#icft=FLUID-5556> we indeed do support the `#` id-based form of IoCSS selector since in highly dynamic contexts it seems that there really are use cases.

        