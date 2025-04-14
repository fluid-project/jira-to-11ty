---json
{
  "title": "ENGAGE-197",
  "summary": "Serialized query parameters in the URL are not deserialized and added to the context",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-11-13T13:50:48.000-0500",
  "updated": "2009-11-13T13:53:55.000-0500",
  "versions": [
    "0.1"
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
      "author": "Justin Obara",
      "date": "2009-11-13T13:53:55.000-0500",
      "body": "Resolved at r8687\n\nChanged the for loop condition to i < segs.length\n"
    }
  ]
}
---
Serialized query parameters in the URL are not deserialized and added to the context

There is a slight error on line 36 of kettle.js where the condition for the for loop is set to i < segs instead of i < segs.length. This means that the loop terminates immediately and doesn't execute the code inside of it.

        