---json
{
  "title": "FLUID-5761",
  "summary": "Silent failure when subcomponent is given same name as invoker",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-09-11T09:51:21.845-0400",
  "updated": "2021-08-08T13:57:49.874-0400",
  "versions": [
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5244/",
      "key": "FLUID-5244"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-12-03T23:21:10.269-0500",
      "body": "A particularly embarrassing and hard-to-debug instance of this problem arose through giving a subcomponent the name \"model\". The framework cannot be considered ready for use by the general public until this issue is resolved.\n"
    }
  ]
}
---
If some other top-level member, such an an invoker, is given the same member name as a subcomponent, the construction of the subcomponent will fail silently, since the framework has a simple-minded test which merely checks whether the member exists at all as a diagnosis of whether construction has completed.

In general we need full diagnostics of all kinds of such collisions - as it stands, members, invokers and subcomponents all quietly compete for the same space of top-level names. Any such collision should be treated as a hard configuration failure and trigger an intelligible diagnostic.

Original situation arose with <https://github.com/GPII/gpii-express/pull/10/files> -&#x20;

```java
fluid.defaults("gpii.express.contentAware.router", {
    gradeNames: ["gpii.express.router"],
    dynamicComponents: {
        handler: {
            type:          "gpii.express.handler",
            createOnEvent: "onRequest",
            options: {
                gradeNames: "{arguments}.2",
                request:    "{arguments}.0",
                response:   "{arguments}.1"
            }
        }
    },
    invokers: {
        handler: {
            funcName: "gpii.express.contentAware.router.delegateToHandler",
            args:     ["{that}", "{arguments}.0", "{arguments}.1"]
        }
    }
```

        