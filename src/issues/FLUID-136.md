---json
{
  "title": "FLUID-136",
  "summary": "Event handling in nested reorderers is incorrect.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2007-11-30T18:27:58.000-0500",
  "updated": "2008-06-23T17:51:51.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-134/",
      "key": "FLUID-134"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2007-12-14T10:49:28.000-0500",
      "body": "This was resolved by moving the event binding from dojo to jQuery.&#x20;\n"
    }
  ]
}
---
The example of nested reorderers is the RSFStyleScheduler currently in the sandbox markup examples. There are two incorrect behaviours related to this issue.&#x20;

1\. When tabbing from the outer Reorderer to the inner Reorderer, focus immediately jumps out of the inner Reorderer and goes back to the outer Reorderer.&#x20;

2\. Moving items in the inner Reorderer causes reordering to happen in the outer Reorderer.

        