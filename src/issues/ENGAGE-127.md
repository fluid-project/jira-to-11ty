---json
{
  "title": "ENGAGE-127",
  "summary": "When contacting couch the query string is concatenated twice",
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
  "reporter": "Justin Obara",
  "date": "2009-10-14T14:10:55.000-0400",
  "updated": "2009-11-13T11:58:40.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-10-14T14:54:22.000-0400",
      "body": "This occurs on the client end - line 20 of loadData.js converts the entire document URL into a string, including query parameters, but the jQuery.ajax call on line 37 further supplies the query parameters as the \"data\" argument. Note that these URLs are not ones that we plan to support (at least without further discussion) since their serialisation into JSON objects is unclear. We may adopt a standard whereby a segment without value is silently interpreted as if it had the value \"1\", and likewise on serialization.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T11:58:40.000-0500",
      "body": "Resolved at r8682\\\nRemoved the data options in the ajax call, this is what was adding in the query string a second time.&#x20;\n"
    }
  ]
}
---
When contacting couch the query string is concatenated twice

Meaning that if the query string is "mmi\&merchandising" it will be displayed as "mmi\&merchandising\&mmi\&merchandising"

This seams to be happening at line 37 or loadData.js

        