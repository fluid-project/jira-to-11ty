---json
{
  "title": "FLUID-4055",
  "summary": "IoC system should allow \"reinstantiation\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-02-08T16:24:19.614-0500",
  "updated": "2017-03-30T21:46:08.303-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-17T10:26:34.642-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-18T16:53:27.209-0400",
      "body": "Implemented using the utility \"fluid.clearComponent\" together with the directive \"onCreateEvent\" which allows this use case to be met without bothering the user with details of the instantiator\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2017-03-30T21:46:08.303-0400",
      "body": "This JIRA was written in a pretty unclear way and it is no longer clear what is referred to by \"the contextual information\". In the post <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> framework, the techniques used in this test case (overwriting of component options, manual calls to fluid.initDependent) are no longer supported, and so the test has been reverted to a standard \"createOnEvent\" workflow. It's no longer clear what effect was intended by the following strange line:\n\n```java\nreins.child1.options.components.child2 = fluid.copy(fluid.defaults(\"fluid.tests.reinstantiation\").components.child1.options.components.child2);\n```\n"
    }
  ]
}
---
As it stands, the IoC system requires all elements in a component tree to be constructed "synchronously", as part of the same stack frame. This implementation, making use of "thread-locals" is also morally incorrect as it will violate context resolution rules if a component is being constructed "gingerly" as a result of a reference from another part of the tree. This implementation needs to be replaced with one that is not only correct, but which allows subsections of component trees to be constructed in an IoC-driven way at a later time, but whilst retaining the contextual information which was present at initial construction time.

        