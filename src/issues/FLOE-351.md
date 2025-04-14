---json
{
  "title": "FLOE-351",
  "summary": "FD tool not saving sticky keys pref to cookie",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-26T14:51:12.024-0400",
  "updated": "2015-11-03T12:40:39.014-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-26T15:02:47.675-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/65>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-26T15:21:05.456-0400",
      "body": "Merged @ ceabacef4e8ae159a0594614533b6489088bc94f\n"
    }
  ]
}
---
The FD tool is not recording the value of the sticky keys preference when it is turned on or off.\
To reproduce:

* navigate through the tool to the sticky keys panels
* turn sticky keys on
* examine the stored cookie
* note that the sticky keys value is not there

        