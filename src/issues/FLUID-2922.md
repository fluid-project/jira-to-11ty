---json
{
  "title": "FLUID-2922",
  "summary": "Refactor php code to send all dependency JSON data",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-06-08T09:34:57.000-0400",
  "updated": "2009-08-21T16:43:43.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2945/",
      "key": "FLUID-2945"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2922/config_generalized.php",
      "filename": "config_generalized.php"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2922/jsonProcessor.php",
      "filename": "jsonProcessor.php"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2922/jsonProcessor.php",
      "filename": "jsonProcessor.php"
    }
  ],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-06-10T12:30:21.000-0400",
      "body": "I have revised this file to move the php tag to the top (oops) as well as to add in the constants required by the jsonProcessor.php code.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-10T12:31:37.000-0400",
      "body": "This is a first pass at getting the json data together in a single string. Still needs error checking and need to figure out how the client side calls this code, and how the data is returned to the client.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-06-16T15:26:09.000-0400",
      "body": "This copy of jsonProcessor.php replaces the previously uploaded version. It has a revised format for the returned json data as described in <https://fluidproject.atlassian.net/browse/FLUID-2945#icft=FLUID-2945> and also the copyright has been corrected (<https://fluidproject.atlassian.net/browse/FLUID-2954#icft=FLUID-2954>).\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-07-03T14:35:09.000-0400",
      "body": "This is done. Will add more issues to resolve further changes.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-21T11:47:07.000-0400",
      "body": "moving to customBuild\n"
    }
  ]
}
---
Server side task: Refactor the php code for the build front end tool to send a blob of dependency data from the json files -\
essentially concatinate the json data \[{ }, { },....., { }]

        