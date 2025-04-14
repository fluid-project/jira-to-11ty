---json
{
  "title": "FLUID-3836",
  "summary": "HTML5 Uploader: Screen Reader doesn't tell user how to remove a file from the queue",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2010-11-15T12:21:50.460-0500",
  "updated": "2010-11-19T12:32:46.433-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Win XP + FF3.6 + (Jaws 11 or NVDA)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-15T12:51:04.788-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-15T16:35:05.759-0500",
      "body": "Replaced \"Remove file\" text with \"Press delete key to remove file from queue\" to provide improved instructions on how to remove a file from the file queue.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-16T11:20:02.708-0500",
      "body": "Confirmed. Much clearer now.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-11-19T12:32:46.376-0500",
      "body": "I've reviewed the code for this (actually committed under <https://fluidproject.atlassian.net/browse/FLUID-3722#icft=FLUID-3722>) and it looks good.\n"
    }
  ]
}
---
Using a screen reader: When focus lands on one of the files in the file queue, the screen reader reads the file name and size and says "remove file", but doesn't actually say anything about how to remove the file. The 'remove file' is not a button and the user cannot activate it with space or enter - they remove a file with the Delete key. It would be much more clear if there were instructions.

        