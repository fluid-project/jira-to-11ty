---json
{
  "title": "FLUID-4534",
  "summary": "UI Options uber-components need an \"onReady\" event",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-11-03T16:18:53.028-0400",
  "updated": "2013-08-16T10:54:32.847-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "The root UI Options component fires an event named \"onUIOptionsComponentReady.\" From an integrator's perspective, the naming implies that the event will fire once the component is ready. In fact, this event is used to trigger the creation of various subcomponents (e.g. textControls, layoutControls, etc). It may fire when the internal UI Options component is technically ready for its subcomponents to be added, but it's not when \"the component,\" as the integrator likely perceives it, is ready.\n\nPerhaps what we need is a separate event fired by the uber-component (e.g. fatPanel) when the uber-component is, in fact, \"ready\" as an integrator would expect, that is: all subcomponents are finished rendering, everything is hooked up, and the component is ready to use.\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4257/",
      "key": "FLUID-4257",
      "summary": "Add \"destruction\" lifecycle point and semantics into component system and IoC"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-08-22T14:53:15.664-0400",
      "body": "With the resolution of <https://fluidproject.atlassian.net/browse/FLUID-4257#icft=FLUID-4257>, it is now possible for people to subscribe to the standard \"onCreate\" event of UIOptions\n"
    }
  ]
}
---

        