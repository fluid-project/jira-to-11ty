---json
{
  "title": "DECA-106",
  "summary": "Capture requires a network connection",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2010-05-14T16:14:31.776-0400",
  "updated": "2012-05-25T13:38:33.492-0400",
  "versions": [
    "0.3",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": "FF3.6 Ubuntu 10.04\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-10T16:23:23.229-0400",
      "body": "I don't think this needs to be a Blocker since the mock server will not be an end deliverable, and the work-around will be to ensure a network connection. Maybe a Major or Critical classification is better.\n\nThoughts?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-12T18:09:07.923-0400",
      "body": "Does this have to do with Firefox's fairly aggressive \"Offline\" mode, where it refuses to even make Web calls to localhost if no connection is found? A workaround is to uncheck the \"Work Offline\" setting under the File menu.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-07-15T09:36:12.765-0400",
      "body": "Appears not to be an issue with Ubuntu 9.10, FF 3.6, with and without camera mode.\n"
    },
    {
      "author": "James Yoon",
      "date": "2010-07-15T15:41:20.112-0400",
      "body": "Using Mozilla Prism overcomes this problem. There is no \"Work Offline\" mode in Prism.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-25T13:38:33.491-0400",
      "body": "The capture work flow has been removed in this version\n"
    }
  ]
}
---
Even when using the mockserver attempting to take a picture with no network will cause the post to images to fail.

        