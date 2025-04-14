---json
{
  "title": "ENGAGE-368",
  "summary": "Couch DB views should never transform or make assumptions about museum-specific data",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-10T12:30:06.000-0500",
  "updated": "2017-12-22T09:44:25.384-0500",
  "versions": [
    "0.1",
    "0.3b"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:25.383-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
At the moment, several of our Couch DB views actively transform the raw data from Couch. This is accomplished by making museum-specific assumptions about the structure of the data.&#x20;

For example:

<https://source.fluidproject.org/svn/scratchpad/couch-views/mccord/_design/artifacts/view/map.js>

Notice here that the artifacts/view View (ack!) assumes that the raw documents are structured in a particular way, in this case specific to the McCord museum.

This bug has two side effects:\
1\. It requires museum implementers of Engage to write their own custom Couch views, which requires knowledge of JavaScript and Couch.\
2\. It causes serious problems for documents that can be accessed either through a standard view or a free-text Lucene search. Without cut and pasting code, there's no way to ensure that both the standard and Lucene views actually return the same model.

        