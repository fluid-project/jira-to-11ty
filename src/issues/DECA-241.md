---json
{
  "title": "DECA-241",
  "summary": "The server returns URLs that are relative to the server root, but doesn't include the server's domain",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-04-13T12:02:56.184-0400",
  "updated": "2012-06-08T14:48:34.015-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-08T14:47:08.011-0400",
      "body": "Possibly the domain could be added through configuration to the server, and then appended before returning the url.\n"
    }
  ]
}
---
An example response from the export type resource:\
{"status": "complete", "url": "/library/book/images/pdf/Decapod.pdf"}

Notice that the url doesn't include the domain. The Decapod UI is able to still use this, but for someone else pinging the server directly, it may be too ambiguous.

        