---json
{
  "title": "FLUID-5818",
  "summary": "Ginger algorithm does not construct children of parent components if reference source has constructed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-11-12T15:48:41.539-0500",
  "updated": "2016-01-15T11:58:44.724-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-01-15T11:58:36.917-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
Our optimisations in support of faster invokers and listeners (<https://fluidproject.atlassian.net/browse/FLUID-5796#icft=FLUID-5796>, <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249>) have been too aggressive. We adopted a simple check at the site of a reference, whether the site itself had constructed, in order to determine whether to use the "fast route" or "slow route" for context resolution. This fails in the case where a child component has the state "constructed" but its parent does not, and the parent has further children whose contexts are only accessible via the "ginger member rule" that is our sole concession to component-level gingerness prior to  FLUID-4925.

from fluid.expander.fetch:

```java
// somewhat hack to anticipate "fits" for FLUID-4925 - we assume that if THIS component is in construction, its reference target might be too
        var component = inLocal ? localRecord[context] : fluid.resolveContext(context, options.contextThat, options.contextThat.lifecycleStatus === "constructed");
        if (component) {
```

In order to avoid degrading performance here, we will have to introduce a new lifecycleStatus which will be propagated by flooding to children once a parent is constructed.

        