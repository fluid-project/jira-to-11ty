---json
{
  "title": "FLUID-5375",
  "summary": "In IoC testing framework, modelChanged events for relay components behave incorrectly",
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
  "reporter": "Cindy Li",
  "date": "2014-05-16T15:15:16.160-0400",
  "updated": "2014-06-25T16:16:10.567-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-05-16T15:23:59.827-0400",
      "body": "Submitted a pull request to demonstrate the issue: <https://github.com/fluid-project/infusion/pull/521>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-05-28T09:15:58.013-0400",
      "body": "The pull request that fixes this issue (<https://github.com/fluid-project/infusion/pull/520>) has been merged into the project repo @ f77fac2d2d8ecd7fe5ffd2f497cf404e8f13814b\n"
    }
  ]
}
---
When testing relay components with IoC testing framework, firing of modelChanged event may end up in three situations:

1\. The event is fired with correct new value; (correct behavior)\
2\. The event is fired with unchanged value; (wrong behavior)\
3\. The event is not fired at all. (wrong behavior)

The issue doesn't occur when,

1\. The component is used outside of the IoC testing framework;

2\. The exact same component works fine by replacing the relay grade with the corresponding non-relay grade, such as, replacing "fluid.renderRelayComponent" with "fluid.rendererComponent".

        