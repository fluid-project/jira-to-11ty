---json
{
  "title": "FLUID-5824",
  "summary": "distributeOptions distributions should be uniquified by namespace at the target, together with distance metric",
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
  "date": "2015-12-02T15:12:48.137-0500",
  "updated": "2016-01-15T12:00:13.675-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5587/",
      "key": "FLUID-5587",
      "summary": "Framework should support namespaced options distributions rather than an array"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5621/",
      "key": "FLUID-5621",
      "summary": "Improve distributeOptions system so that priority of different distributions can be precisely controlled"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-01-15T12:00:09.174-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
Our rules for namespaced options distributions together with priority constraints (implemented with FLUID-5621), are still not quite right. We need finer control in the case multiple distributors are competing to advise the same target. There seem to be two cases that need to be handled by the same scheme -&#x20;

i) Where a level of containment is duplicated in one variant configuration, the distribution namespaces will be the same at two levels\
ii) Where we require to completely displace a distribution, rather than merge with it (for example, in the case we need to displace a gradeName distribution to a target).

As our docs on "Priorities" note, our rules for namespaces wrt options distributions are already a bit anomalous with respect to the other kinds of things that can have priorities (e.g. event listeners). The expectation is that only one item with a particular namespace is permitted at the target. This is currently not enforced for options distributions. If we enforced this, with tie-breaking performed by "tree distance from distribution to target", it looks like we can deal with the two use cases above. Note that these are the opposite distance rules than those implemented originally for distributeOptions - which used to be that CLOSEST distribution wins. As per our recent thinking based around "integration through aggregation" it is more likely that a integrator who is FURTHER AWAY from the target should be given privileged overriding access.

        