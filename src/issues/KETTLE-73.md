---json
{
  "title": "KETTLE-73",
  "summary": "Provide facility to suppress fields from logging in DataSource requests which hold sensitive information",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2018-08-29T12:13:47.324-0400",
  "updated": "2018-12-05T16:19:10.385-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-12-05T16:19:07.319-0500",
      "body": "[The pull request](https://github.com/fluid-project/kettle/pull/49) has been merged into the project repo at [this commit](https://github.com/fluid-project/kettle/commit/281d9aa34463092df2a75ab2c8c1af0d8ed0c385).\n"
    }
  ]
}
---
<https://issues.gpii.net/browse/GPII-3309> reports that our default logging in DataSource when issuing a HTTP request logs some information which is sensitive. We should provide a configuration option to DataSources which can selectively suppress this info, and then supply distributions in the FlowManager and Preferences server which engage this configuration.

        