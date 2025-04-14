---json
{
  "title": "FLUID-5242",
  "summary": "Listener blocks distributed via distributeOptions to multiple components will become corrupted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2013-12-21T06:28:12.737-0500",
  "updated": "2018-02-20T14:03:53.733-0500",
  "versions": [
    "1.4"
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
      "author": "Michelle D'Souza",
      "date": "2014-03-27T15:01:35.225-0400",
      "body": "@@Colin Clark@@Antranig Basman Should this issue be fixed for 1.5 or 2.0?&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-02-13T12:58:00.938-0500",
      "body": "Fix was committed to master along with <https://fluidproject.atlassian.net/browse/FLUID-5185#icft=FLUID-5185> jQuery upgrade work at revision 65ad591cc61bd9e84342161234ab837b7e505ed8 on Dec 23rd, 2013\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:11.332-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Similar to many such historical corruption bugs such as <https://fluidproject.atlassian.net/browse/FLUID-5126#icft=FLUID-5126>, <https://fluidproject.atlassian.net/browse/FLUID-4987#icft=FLUID-4987>, <https://fluidproject.atlassian.net/browse/FLUID-4233#icft=FLUID-4233> etc., the mechanism used in distributeOptions has caused yet another aliasing problem. When options blocks are received via fluid.collectDistributions, they are aliased together - this seems to cause no problem in the framework except in fluid.dispatchListener, since fluid.event.resolveListenerRecord has inserted a "listener" field directly into the options record which produces an opportunity for corruption.

In this case, the effect observed is "multiple application of boiled arguments" which is familiar from <https://fluidproject.atlassian.net/browse/FLUID-4631#icft=FLUID-4631> - entries of the form

{arguments}.n etc. will end up corrupting the argument list through multiple application. This was observed when rewriting the Pager tooltip tests to be stable wrt tooltip implementation as well as the new jQuery 1.9 focus rules - the sample configuration was:

```java
fluid.defaults("fluid.tests.trackTooltips", {
 mergePolicy: { tooltipListeners: "noexpand" },
 distributeOptions: {
 source: "{that}.options.tooltipListeners",
 removeSource: true,
 target: "{that fluid.tooltip}.options.listeners"
 },
 tooltipListeners: {
 afterOpen: {
 funcName: "fluid.tests.trackTooltip",
 args: ["open", "\{trackTooltips\}", "\{arguments\}.1", "\{arguments\}.2"] // event.target, tooltip
 },
```

etc. which attempts to distribute a set of listeners to all instantiated tooltips. We solve this for the time being by copying the record within fluid.event.resolveListenerRecord since this is much easier to do - however, we note that it is really the distributeOptions implementation which should defer since this is more exotic and does not penalise all users of the framework.

        