---json
{
  "title": "FLUID-6145",
  "summary": "Begin the \"immutable revolution\" by causing all finally merged component options to be immutable",
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
  "date": "2017-03-10T22:15:36.536-0500",
  "updated": "2024-07-22T10:35:28.761-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6148/",
      "key": "FLUID-6148",
      "summary": "Implement \"potentia II\" constituting aligned, transactional records of author's creational intent"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6426/",
      "key": "FLUID-6426",
      "summary": "Prefs Framework Composite Panel system modifies selectors after construction"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6143/",
      "key": "FLUID-6143"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-03-10T22:23:17.508-0500",
      "body": "Ah, of course, we now remember that this can't be done without the part of the <https://fluidproject.atlassian.net/browse/FLUID-4982#icft=FLUID-4982> work that as we described in <https://github.com/amb26/papers/tree/master/ppig-2016a> corresponds to the implementation of \"potentia II\", since our current \"bit-bashing\" idiom for implementing dynamic components universally takes the form of bashing on the value of `options.components.x` in order to encode representations of upcoming components. Solving this would also solve embarrassing issues like <https://issues.fluidproject.org/browse/FLUID-5614>. It really seems like all of this work just needs to begin simultaneously.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2020-12-14T07:14:28.093-0500",
      "body": "Looks like this was closed yet again by an unrelated Kettle pull\n"
    }
  ]
}
---
This change has been trailled informally for a while, but it is time to break compatibility in a significant way by causing all finally merged options to be immutable. This is essential in order to begin the work for <https://fluidproject.atlassian.net/browse/FLUID-6143#icft=FLUID-6143> - the "memoised merged defaults stencil" object will be structured as an "immutable skeleton" on top of which the elements of the expanded, fetched material from around the tree will be "painted on" by means of the "liana-like" scheme described in <https://wiki.fluidproject.org/display/fluid/The+State+of+Options+Merging+25-4-16> . This means that users will only pay the costs for instantiating the parts of the options structure that are actually variable between component instances, which should lead to huge economies both in reduced garbage and reduced instantiation time.

        