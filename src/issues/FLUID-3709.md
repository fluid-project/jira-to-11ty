---json
{
  "title": "FLUID-3709",
  "summary": "Need some indication of reorderer's orientation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2010-09-07T10:03:37.412-0400",
  "updated": "2011-07-08T16:33:31.838-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-09-07T10:03:52.609-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-08T16:33:31.828-0400",
      "body": "A method to indicate movement for the reorderer was implemented in the Infusion 1.3.1 release. Any new issues related to this should be filed in new specific jiras\n"
    }
  ]
}
---
Need to indicate reordering orientation, ordering, state (for horizontal, vertical, 2D grid). This can be done with aria-describedby, hidden text, or something else that is appropriate.&#x20;

        