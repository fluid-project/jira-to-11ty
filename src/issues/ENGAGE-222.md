---json
{
  "title": "ENGAGE-222",
  "summary": "Conform the paging mechanism in engage to the model used by the Pager in infusion",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-01-11T11:19:26.000-0500",
  "updated": "2010-01-12T09:33:12.000-0500",
  "versions": [],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-12T09:33:12.000-0500",
      "body": "resolved at r8974\n\nRefactored the paging to conform to the model used by the, forthcoming, Pager from Infusion. The only difference being that the model used here has the pageCount included.\n"
    }
  ]
}
---
Conform the paging mechanism in engage to the model used by the Pager in infusion

The Pager has a model that looks like this:

model: {\
pageIndex: undefined,\
pageSize: 10,\
totalRange: undefined\
}

Currently the paging in engage doesn't have a formal model and splits this information up into&#x20;

that.dataInfo.setSize\
that.dateInfo.numSets\
that.setNumber

Making the paging in engage conform to the Pagers model will simplify moving over to using the Pager in engage.

        