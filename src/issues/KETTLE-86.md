---json
{
  "title": "KETTLE-86",
  "summary": "Enable Kettle HTTP requests to be fulfilled with variant status codes",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Philip Tchernavskij",
  "date": "2020-06-18T13:31:43.530-0400",
  "updated": "2020-07-16T11:14:59.883-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6521/",
      "key": "FLUID-6521"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently, Kettle's `kettle.request.http` grade assumes that all successful responses will have the status code 200. Furthermore, when such a request specifying JSON as the content type is honored by calling `request.events.onSuccess.fire()` without any parameters, the response is considered invalid by browser ajax implementations (presumably because the `undefined` payload is not valid JSON).

 

The grade should be amended to a) allow for specifying alternate response codes such as 201 (Created) or 204 (No Content), and possibly b) check that the content type and response payload match up.

        