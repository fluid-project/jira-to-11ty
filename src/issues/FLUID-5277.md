---json
{
  "title": "FLUID-5277",
  "summary": "Improve the error message when an nonexistent container is provided for fluid.viewRelayComponent and fluid.rendererRelayComponent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-02-14T10:45:30.415-0500",
  "updated": "2014-03-18T11:24:15.453-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-02-14T11:43:57.443-0500",
      "body": "Sent a pull request that has a unit test for this issue: <https://github.com/fluid-project/infusion/pull/468>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2014-03-18T04:03:40.762-0400",
      "body": "I have reviewed, tested, and pushed this fix to the project repo's master branch at revision a145ef1f753ff61d514c00bcde60f3aa91fbb17b.\n\n@@Cindy Li, can you confirm that this issue is indeed fixed and close the ticket if so?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-18T11:24:15.451-0400",
      "body": "Confirmed the issue is fixed.\n"
    }
  ]
}
---
When a nonexisted container is provided at instantiating a fluid.viewRelayComponent and fluid.rendererRelayComponent, the error message is "that is null". It would be helpful if the actual "container not found" message is provided. The latter helpful message has been implemented for non-relay components such as fluid.viewComponent and fluid.rendererComponent.

        