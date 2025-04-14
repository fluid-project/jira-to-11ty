---json
{
  "title": "FLUID-6683",
  "summary": "Implement \"integral binding\" facility as part of \"new renderer\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-09-09T08:14:33.188-0400",
  "updated": "2022-06-30T09:17:47.219-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-06-30T09:17:47.189-0400",
      "body": "This was actually delivered with the 4.0 framework release\n"
    }
  ]
}
---
Related JIRAs are <https://fluidproject.atlassian.net/browse/FLUID-6570#icft=FLUID-6570> and <https://fluidproject.atlassian.net/browse/FLUID-6580#icft=FLUID-6580>, but the "integral binding" facility which forms part of the "new renderer" originally written up at <https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260> (although the blueprint for what the "new renderer" is has changed a fair amount since that writeup) - but the core feature by which model material may be directly lensed onto materialised DOM state has not been written up separately before.

As an example from the rewritten Switch demo in the in-progress "new-renderer-demo" branch at <https://github.com/amb26/new-renderer-demo/blob/FLUID-5047/demos/switch/js/SwitchDemo.js#L55-L60> , there's the possibility, for example, to express a direct relay from a boolean value onto the presence or absence of a particular CSS class as

```java
panel: {
                source: "{that}.model.lightOn",
                target: {
                    segs: ["dom", "panel", "class", "{that}.options.styles.light"]
                }
            }
```

or a relay from a boolean flag via an indirecting function snippet onto some DOM text as

```java
modelRelay: {
            text: {
                target: "{that}.model.dom.text.text",
                func: (strings, value) => strings[value ? "on" : "off"],
                args: ["{that}.options.strings", "{that}.model.lightOn"]
            },
```

This facility, together with the "lensed component system" for <https://fluidproject.atlassian.net/browse/FLUID-6390#icft=FLUID-6390>, and the "workflow system" in FLUID-6148 are the key framework supports that constitute the "new renderer". The final part of the functionality, which represents the "antigenic" portion of <https://fluidproject.atlassian.net/browse/FLUID-4260#icft=FLUID-4260> which identifies all participating renderer components, locates and weaves together their markup templates during instantiation is what is currently outside the framework for Infusion 4.x in the <https://github.com/amb26/new-renderer-demo/blob/FLUID-5047> branch, which will be brought into the framework for Infusion 5.x when the old renderer is finally deprecated and removed.

        