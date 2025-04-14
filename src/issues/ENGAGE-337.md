---json
{
  "title": "ENGAGE-337",
  "summary": "Changes to fluid.engage.makeAcceptorForResource() in the My Collection branch cause the Exhibition Browse page to break",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T13:15:31.000-0500",
  "updated": "2010-02-08T16:27:14.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:26:50.000-0500",
      "body": "Justin and I addressed this issue by rolling back the changes to Engage App in the My Collection branch. Instead, we're implementing a custom acceptor for the collect/uncollect operations in order to maintain the resource-oriented style in My Collection.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:27:14.000-0500",
      "body": "This issue was fixed at r9318\n"
    }
  ]
}
---
The My Collection branch contains a modification to EngageApp.js' fluid.engage.makeAcceptorForResource() method to support resource-oriented URLs in the form of:

/users/xyz/artifacts/abc

This causes other code, in particular Kettle's own dataSpout() method, to break. It should be reimplemented in a non-breaking fashion.

        