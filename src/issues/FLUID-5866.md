---json
{
  "title": "FLUID-5866",
  "summary": "Implement \"priorityHolder\" utility component in order to aid coordinating order of effects across a design",
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
  "date": "2016-02-20T18:23:13.781-0500",
  "updated": "2024-07-22T09:28:26.826-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-02-22T08:31:30.314-0500",
      "body": "Note that with the current implementations, priorities from a \"priorityHolder\" cannot be mixed with those outside it - the behaviour is that these output priorities are assigned fixed numbers starting at -10 and decreasing.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-03-07T19:00:05.547-0500",
      "body": "This implementation was a good \"shower idea\" but doesn't in fact helpfully meet any use cases. As well as the confusing disadvantage mentioned in the previous question, it is not in fact necessary for sorting model listeners around the global skeleton - the existing implementation is good enough to do this already - see revised test case in <https://github.com/fluid-project/infusion/pull/683/files> - and it is also not good enough to deal with the other use case of being able to expand the repertoire of \"extremal priorities\" - since there is no ability in the current implementation to generate numerical priorities that actually compare greater than a standard extremal priority\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-04-20T09:38:16.823-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/683> has been merged into the master branch at 6b79a758ba43ce98f6305603b2e5f73d4fbf8652\n"
    }
  ]
}
---
Our "priority" system is very helpful when coordinating items which can be expected to co-occur (for example, event listeners or options distributions) but the model relay system, for example, can create situations where the elements whose order is expected to be scheduled may be widely dispersed - for example, they may be model listeners attached to different components.

In this case and others, it would be helpful to be able to manage priorities in a more central area in a design. To this end, we propose a component "priorityHolder" which accepts named priority constraints of the ordinary kind seen elsewhere in the framework, which it then resolves to top-level elements which can be IoC-resolved from elsewhere, for example via expressions like {priorityHolder}.priority.repaint etc.

This requires as well as the simple priorityHolder component itself that priority entries are themselves IoC-resolved wherever they occur in configuration blocks.

Another area this would help would be in the otherwise closed-ended "extremal priorities" such as "last:testing" etc. A "priorityHolder" is a place where arbitrarily extremal priorities could be contributed and managed.

        