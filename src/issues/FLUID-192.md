---json
{
  "title": "FLUID-192",
  "summary": "Replace the Reorderer's notion of \"orderables\" with more fine-grained concept of selectables, movables, and drop targets.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-01-30T14:28:20.000-0500",
  "updated": "2008-06-23T17:45:23.000-0400",
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
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-02-03T15:53:57.000-0500",
      "body": "As we worked on this issue we realized that it is important and non-trivial to keep the selectables and movables lists up to date. We can either take in a function which locates the items in question or internally update the lists. The current plan is to go back to using finder functions but keep with the fine grained approach.&#x20;\n\nWe will provide two different methods of identifying orderable items. In the simple case, the caller can pass a single function named 'findMovables' which will identify items that are selectable, movable and drop targets. If more control is required, such as in the portlet reordering case, the caller can pass the following structure:\n\nfindItems: {\\\nselectables: function () {},\\\nmovables: function () {},\\\ndropTargets: function () {}\\\n}&#x20;\n"
    }
  ]
}
---
Currently the Reorderer has the concept of an "orderable" element, which implies that these elements are simultaneously selectable, movable, and can serve as drop targets for other orderables.

In order to support the complex use cases of portlet reordering, we need to identify each of these types of elements separately. As a result, we need to modify the Reorderer's API to take in the following parameters:

{\
selectables: jQ || \[],\
movables: jQ || \[],\
dropTargets: jQ || \[]\
}

This will replace the concept of orderables completely.

        