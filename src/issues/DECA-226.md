---json
{
  "title": "DECA-226",
  "summary": "calling the delete method on a book only deletes its images directory",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-24T13:04:45.501-0500",
  "updated": "2012-05-18T14:20:00.939-0400",
  "versions": [
    "0.5a"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-01-24T15:16:58.130-0500",
      "body": "I've changed the book.py script to remove and not re-add the 'book' directory. There is also a unit test for this.\n\nThe changes are currently in my bitbucket repo\\\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:19:58.049-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
calling the DELETE method on a book only removes the images directory. If there is other data related to the book in the books directory, some model data for example, this currently won't be removed. All of the data in the book should be removed.&#x20;

This should probably just delete the entire book directory.

        