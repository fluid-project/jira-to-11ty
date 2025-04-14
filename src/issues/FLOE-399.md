---json
{
  "title": "FLOE-399",
  "summary": "Create the data entry form",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-06-23T09:38:42.934-0400",
  "updated": "2015-09-14T14:03:10.053-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool",
    "Sonification"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-402/",
      "key": "FLOE-402",
      "summary": "Setup up the initial repository for the chart authoring tool"
    },
    {
      "type": "Dependence",
      "url": "/browse/FLOE-403/",
      "key": "FLOE-403"
    },
    {
      "type": "Related to",
      "url": "/browse/FLOE-400/",
      "key": "FLOE-400"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-25T12:28:45.880-0400",
      "body": "Submitted a pull request to add infusion to the repository:\\\n<https://github.com/fluid-project/chartAuthoring/pull/2>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-07-15T12:31:24.912-0400",
      "body": "The pull request to add the infusion lib has been merged into the master branch @ d135fc3bceacde76a8a392c4ee35b142915b7209\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-07-20T10:34:18.116-0400",
      "body": "Submitted a pull request for the data entry form at:\\\n<https://github.com/fluid-project/chartAuthoring/pull/3>\n"
    }
  ]
}
---
Create the data entry form for the chart authoring tool. This will be the part where the values, labels, and etc are entered for the chart to be generated from.

Notes:

* % are not editable; the create button becomes enabled once there are values

Designs:

* <https://www.dropbox.com/s/c7qfhpf13cw12ei/CA%20Tool%20%5BVersion%207%5D.pdf?dl=0>

        