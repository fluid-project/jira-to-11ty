---json
{
  "title": "DECA-234",
  "summary": "Replace lastModified with os.path.getmtime",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-02-06T13:29:28.843-0500",
  "updated": "2012-05-18T14:22:36.601-0400",
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
      "date": "2012-02-06T13:56:12.834-0500",
      "body": "The pdf.py code has been updated to remove the lastModified function and replace its usage with os.path.getmtime. The unit tests were also updated.\n\nThe changes are in my bitbucket repo\\\n<https://bitbucket.org/jobara/decapod-server-response>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:22:33.528-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Currently pdf.py has a function, lastModified, that uses os.stat to determine the modification time. This should be switched to os.path.getmtime, which already does this in a single function call and returns a more accurate time.

        