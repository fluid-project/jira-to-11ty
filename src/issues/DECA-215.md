---json
{
  "title": "DECA-215",
  "summary": "Implement server side file validation",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2012-01-12T13:16:54.912-0500",
  "updated": "2012-05-18T14:20:48.478-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
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
      "date": "2012-02-01T13:57:17.224-0500",
      "body": "I've implemented the server side file validation. It will now only accept png, jpeg, and tiff files. If a different type is uploaded it will reject it and return a 415 status. I've written new unit tests for the validation. I will attempt to also write tests for the server to ensure that a 415 is returned on error.&#x20;\n\nThe changes are currently in my bitbucket repo <https://bitbucket.org/jobara/decapod-server-validation>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-02-02T12:54:41.315-0500",
      "body": "I've added unit tests to verify the response from the server\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:20:44.048-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
The server should have a robust check, not just file extension to ensure that the correct type of file is uploaded. An error should be returned if the incorrect file types are uploaded, and the file rejected.

        