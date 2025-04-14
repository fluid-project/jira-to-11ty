---json
{
  "title": "FLUID-6372",
  "summary": "Implement proxies to bridge between standard JS code access semantics and ginger world",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Reopened",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-03-22T19:00:52.551-0400",
  "updated": "2021-06-21T11:30:04.550-0400",
  "versions": [],
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
A long-standing framework conundrum has always been the extent to which we attempt to support a language proxy level accommodation between the natural access semantics of JS code and the framework's own lazy evaluation embodied in the "ginger model". Traditionally we have shied away from this for a few reasons - firstly that their support was absent on various runtimes we were committed to support (mostly the line of plain IE implementations ending with IE11), and secondly that adopting them might pollute our still unclear semantics for what the framework's evaluation should be.

Enough time has passed that it is now reasonable to ditch support for the last environments which wouldn't support this - at the time of writing, support for IE11 is at 4.5% (although there is surprisingly still 1.66% of the market on IE9). By the time the revised framework sees the light of day, we can expect this share to be negligible.

Secondly, we are now rather clearer about the intended framework semantics, and it seems clear that there is good value offered by supplying proxies at least for the immutable component options and other component-mounted material that has "once-only" evaluation semantics. Supplying proxies to gear into model access seems less desirable since there are natural cases where values could be written into holders which are "undefined" or otherwise cause substantial change of shape of model material.

Supplying proxies for component material would resolved conundrums such as "init time races" where we are trying to supply initial values for models via expanders which attempt to make use of component machinery which hasn't yet been instantiated - our standard advice of hoisting such references into integration domain (ID) args is only good for simple cases - one can't expect users to do this for denser networks of mutually referring functions.

        