---json
{
  "title": "KETTLE-8",
  "summary": "Split general Kettle configuration out of the engage config file",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2009-11-30T21:29:13.000-0500",
  "updated": "2014-03-03T14:19:15.914-0500",
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
      "author": "Michelle D'Souza",
      "date": "2010-03-29T21:23:16.000-0400",
      "body": "This work is complete in the <https://fluidproject.atlassian.net/browse/ENGAGE-208#icft=ENGAGE-208> branch.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2013-08-13T13:58:39.458-0400",
      "body": "\"new new Kettle\" has now stripped out deployment-specific information (in this new case, GPII-universal specific, rather than engage-specific) from the main configuration.\n"
    }
  ]
}
---
Currently we have an engageConfig.json file which contains configuration information for general Kettle as well as for Engage's use of Kettle. In order to make Kettle usable in contexts other then Engage we need to separate the Kettle specific and Engage specific configuration.&#x20;

        