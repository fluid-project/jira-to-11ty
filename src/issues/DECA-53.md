---json
{
  "title": "DECA-53",
  "summary": "Use pexpect to spawn gphoto shells for taking pictures.",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-23T10:38:54.000-0400",
  "updated": "2012-06-01T10:13:32.804-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-95/",
      "key": "DECA-95",
      "summary": "Decapod should take pictures from cameras simultaneously"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:13:32.787-0400",
      "body": "The capture workflow has been removed from the 0.5 release\n"
    }
  ]
}
---
Currently, we call out to the command line every time a picture is going to be taken which is very slow. Using pexpect to create a gphoto shell will improve performance.&#x20;

        