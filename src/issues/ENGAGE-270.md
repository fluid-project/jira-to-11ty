---json
{
  "title": "ENGAGE-270",
  "summary": "The Engage demo index page doesn't correctly encoded ampersand characters for XML documents",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-01-21T15:30:12.000-0500",
  "updated": "2014-03-03T14:14:54.270-0500",
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
      "author": "Colin Clark",
      "date": "2010-01-21T15:31:54.000-0500",
      "body": "Committed a fix to this at r9090\n"
    }
  ]
}
---
In the engageDemo/index.html we seem to encode ampersand characters (&) incorrectly. They are represented in links as "%28" and then converted using JavaScript into ampersands in index.js.

The correct way to represent an ampersand in an XML document (such as an XHTML page) is to use an entity. For ampersands, this is \&amp; or \&#38;

We should update these in the HTML and remove the JavaScript code.

        