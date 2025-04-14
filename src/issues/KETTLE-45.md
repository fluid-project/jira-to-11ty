---json
{
  "title": "KETTLE-45",
  "summary": "Document and write tests for \"gradeNames\" option accepted by requestHandler configuration",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-06-27T21:52:08.903-0400",
  "updated": "2016-07-07T08:01:56.587-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
A feature implemented in the 1.0 release of Kettle was support for a "gradeNames" option within a requestHandler block - <https://github.com/fluid-project/kettle/blob/master/lib/KettleServer.js#L164> - this is a useful feature that perhaps was used in some interim test cases. Unfortunately it has slipped through the cracks and has not been tested or documented.

<https://github.com/fluid-project/kettle/blob/master/docs/RequestHandlersAndApps.md#structure-of-the-handlerrecord-structure>

        