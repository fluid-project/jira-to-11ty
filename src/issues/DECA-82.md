---json
{
  "title": "DECA-82",
  "summary": "Change file name format and path",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jonathan Hung",
  "date": "2010-03-23T11:00:03.000-0400",
  "updated": "2012-01-10T09:48:20.993-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-96/",
      "key": "DECA-96"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-25T12:48:41.710-0400",
      "body": "As part of addressing hard-baked paths throughout the server for <https://fluidproject.atlassian.net/browse/DECA-113#icft=DECA-113>, I moved the location of all captured images into configuration. The default is a directory called \"captured-images\" inside the server directory, but it can now be configured to any other path location as necessary.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-06-25T12:49:22.683-0400",
      "body": "Jon, can you elaborate on the second half of this issue, related to file names? Currently images are saved as \"Image01.jpg\". Can you be more specific about how you think files should be named, and why?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-06-25T14:22:13.618-0400",
      "body": "I spoke to Jonathan in the channel about this issue, and he elaborated:\n\njhung: Two issues: 1. The path should be something more logical.\\\n\\[1:48pm] jhung: 2. The Image filenames should be expanded to use padded zeroes instead of \"Image1.jpg\" etc.\\\n\\[1:48pm] jhung: The note about the Ocropus directory structure deals with both these issues - file naming and directory structure as it relates to book structure\\\n...\\\n\\[1:48pm] colinclark: ok, so #1 is fixed\\\n\\[1:48pm] colinclark: By default, captured images go into a \"captured-images\" directory inside the server, but this can be configured to be anywhere\\\n\\[1:48pm] colinclark: #2 is basically padding\\\n\\[1:48pm] colinclark: How many zeroes do we want?\\\n\\[1:49pm] colinclark: 0001 seem about right?\\\n\\[1:49pm] jhung: 4 should be sufficient.\\\n\\[1:49pm] jhung: 0001 - 9999\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:40:39.467-0400",
      "body": "This was resolved fully at revision d6b270809a by packaging up all book-related content into a single directory structure and naming all images as specified in the comments on this ticket.\n"
    }
  ]
}
---
Change the image path and filename so that it is not dependent on /testData/capturedImages and the file name should be better named with an appropriate index. (i.e. "Decapod-0001.jpg").

This may be resolved by supporting the Ocropus directory stucture.

        