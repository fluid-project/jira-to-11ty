---json
{
  "title": "FLUID-5208",
  "summary": "Root reference to events and listeners blocks should be specifiable using IoC reference",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "y z",
  "date": "2013-11-06T13:10:28.980-0500",
  "updated": "2016-04-25T10:31:06.422-0400",
  "versions": [
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": "All\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5668/",
      "key": "FLUID-5668"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-12-10T07:32:14.477-0500",
      "body": "A partial attempt was made to resolve this issue which is recorded at <https://github.com/amb26/infusion/tree/FLUID-5208> - however this work had to be abandoned, as this feature seems as if it will generate too much fragility in the framework's processing. In general, material which is moved wholesale from place to place in a component's options structure runs the risk of inconsistent processing by custom mergePolicies and other site-specific workflow - for example, it is likely to miss out on the quite specialised workflow enjoyed by listeners, modelListeners and the like. We recommend instead that material be assembled in an aligned way - that is, in an options location which agrees with its final position, and composited together using grade merging. Movement between differently named paths in an options structure (that is, in units that are significantly larger than single values) should be avoided.\n"
    }
  ]
}
---
Currently it is not possible to pass events/listeners option declaratively. The only thing that works is declaring events on per event basis.

For example:

```javascript
fluid.defaults("somecomponent", {
    ...,
    events: {
        onNewChild: null
    },
    members: {
        someevents: {
            one: null,
            two: null
        },
        somelisteners: {
            one: "fluid.identity",
            two: "fluid.identity"
        }
    },
    dynamicComponents: {
            child: {
                createOnEvent: "onNewChild",
                type: "somechild",
                options: {
                    events: "{somecomponent}.someevents",
                    listeners: "{somecomponent}.somelisteners"
                }
            }
        },
});
```

        