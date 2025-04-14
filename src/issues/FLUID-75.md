---json
{
  "title": "FLUID-75",
  "summary": "Clients should initalize the Reorderer with an \"orderable finder\" function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-10-25T16:52:23.000-0400",
  "updated": "2011-01-28T12:12:32.016-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
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
      "date": "2011-01-28T12:09:46.557-0500",
      "body": "Reopening these issues to add the reorderercomponent to them.\n"
    }
  ]
}
---
The responsibility for finding orderable items within a container should be borne partly by the client.  The mechanism for doing this is for the client to define a function that will return an array of elements within a  container that the Reorderer can call to determine the current set of items to be (re)ordered.

        