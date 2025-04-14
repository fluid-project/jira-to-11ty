---json
{
  "title": "KETTLE-12",
  "summary": "Improve Kettle's URL router, supporting more RESTful URLs",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Resolved",
  "resolution": "Fixed",
  "reporter": "Colin Clark",
  "date": "2010-08-19T18:40:44.118-0400",
  "updated": "2013-08-13T13:52:45.129-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T13:52:45.100-0400",
      "body": "\"new new Kettle\" being based on express, allows all of express's routing functions including arbitrary depth expressions involving capturing patterns such as /user/:id/photos - whilst this offers good user flexibility, we will need to work a bit to recover some of the original declarative capabilities planned for Kettle, including \"inverse routes\". In the meantime we can consider this issue resolved as filed\n"
    }
  ]
}
---
At the moment, Kettle's URL routing scheme isn't fully functional. As a result, it can be very complex to define URL handlers for paths deeper than one segment (see Engage's MyCollection services for an illustration of the problem).

We need to improve Kettle's router to include support for default handlers at any URL depth, as well as improved passing of URL path segments to handlers. This will need to be implemented first at the lowest level of Kettle, and then included in the Spouts abstraction.

        