---json
{
  "title": "FLUID-5279",
  "summary": "\"that.produceTree is not a function\" when refreshView() is called as a model (relayed) listenr on a renderer relay component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2014-02-18T10:54:42.815-0500",
  "updated": "2014-03-18T11:25:16.554-0400",
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
      "date": "2014-02-18T16:01:40.605-0500",
      "body": "Sent a pull request with a unit test to demonstrate this issue: <https://github.com/fluid-project/infusion/pull/471>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2014-03-18T04:18:38.020-0400",
      "body": "I have tested, reviewed, and pushed this fix to the project repo's master branch at revision 137ddb0c83926d3252a8c8488caa34332cc96a4d.\n\n@@Cindy Li can you confirm that this fix addresses the issue and close the ticket if so? Thanks!\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-18T11:25:16.552-0400",
      "body": "Confirmed the issue is fixed.\n"
    }
  ]
}
---
In a use case with:\
1\. the direct model sharing is defined between a relay component and a renderer relay component;\
2\. a model listener to refresh view is defined as a model listener on the rederer component.

Instantiating this component throws error: that.produceTree is not a function.

        