---json
{
  "title": "FLOE-412",
  "summary": "Connect the data entry form and the pie chart",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Cindy Li",
  "date": "2015-08-21T14:11:08.200-0400",
  "updated": "2015-10-07T09:54:24.593-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-403/",
      "key": "FLOE-403"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-10-02T12:48:06.382-0400",
      "body": "The pull request <https://github.com/fluid-project/chartAuthoring/pull/7> has been merged into the master @ df106a8f9d353d9829d6d58b5d18b2e218bd24c9\n"
    }
  ]
}
---
The data structure of data entries from the data entry form is:\
{\
"dataEntry-uuid1": {\
value: number,\
percentage: number,\
label: string\
},\
"dataEntry-uuid2": {\
...\
},\
...\
}

The data set structure required to draw pie chart is:\
\[{\
id: "dataEntry-uuid1",\
value: number,\
label: string\
}, {\
id: "dataEntry-uuid2",\
....\
}, ....]

To connect these two pieces, a model relay is needed for the data conversion.

        